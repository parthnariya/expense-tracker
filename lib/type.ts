import { Budget } from "@prisma/client";
import { ReactNode } from "react";

export type WithChild = { children: ReactNode };

export type BudgetWithExpense = Budget & {
  totalItem: number;
  totalSpent: number;
};
