"use server";

// import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { DeleteBudgetSchema } from "./schema";
import { auth } from "@clerk/nextjs/server";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "Unauthorize",
    };
  }
  const { id } = data;
  let budget;
  try {
    budget = await prisma.budget.findFirst({
      where: {
        createdBy: userId,
        id,
      },
      include: {
        Expense: true,
      },
    });
    if (budget?.Expense) {
      await prisma.expense.deleteMany({
        where: { budgetId: id },
      });
    }

    budget = await prisma.budget.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return { error: "Failed to delete budget" };
  }
  revalidatePath(`/budget}`);
  return {
    data: budget,
  };
};
export const deleteBudget = createSafeAction(DeleteBudgetSchema, handler);
