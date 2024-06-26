"use server";

// import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateBudgetSchema } from "./schema";
import { auth } from "@clerk/nextjs/server";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "Unauthorize",
    };
  }
  const { amount, name, icon } = data;
  let budget;
  try {
    budget = await prisma.budget.create({
      data: {
        amount,
        createdBy: userId,
        name,
        icon,
        totalSpent : 0
      },
    });
  } catch (error) {
    return { error: "Failed to create budget" };
  }
  revalidatePath(`/budget`);
  return {
    data: budget,
  };
};
export const createBoard = createSafeAction(CreateBudgetSchema, handler);
