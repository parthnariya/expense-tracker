import { Budget, Expense } from "@prisma/client";
import { ReactNode } from "react";

export type WithChild = { children: ReactNode };

export type BudgetWithExpense = Budget & {
  totalItem: number;
  totalSpent: number;
};

export type ExpenseWithBudget = Expense & {
  Budget: Budget;
};
