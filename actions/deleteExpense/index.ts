"use server";

// import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { DeleteExpenseSchema } from "./schema";
import { auth } from "@clerk/nextjs/server";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "Unauthorize",
    };
  }
  const { id, budgetId } = data;
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

    expense = await prisma.expense.delete({
      where: {
        id,
        budgetId: budget.id,
      },
    });
  } catch (error) {
    return { error: "Failed to delete expense" };
  }
  revalidatePath(`/budget/${budgetId}`);
  return {
    data: expense,
  };
};
export const deleteExpense = createSafeAction(DeleteExpenseSchema, handler);
