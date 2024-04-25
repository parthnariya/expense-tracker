"use server";

// import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateExpenseSchema } from "./schema";
import { auth } from "@clerk/nextjs/server";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "Unauthorize",
    };
  }
  const { amount, name, budgetId } = data;
  let expense;
  try {
    const budget = await prisma.budget.findFirst({
      where: {
        createdBy: userId,
        id: budgetId,
      },
    });

    if (!budget) {
      return {
        error: "Budget is not found",
      };
    }

    expense = await prisma.expense.create({
      data: {
        amount,
        createdBy: userId,
        name,
        budgetId: budget.id,
      },
    });
  } catch (error) {
    return { error: "Failed to create expense" };
  }
  revalidatePath(`/budget/${budgetId}`);
  return {
    data: expense,
  };
};
export const createExpense = createSafeAction(CreateExpenseSchema, handler);
