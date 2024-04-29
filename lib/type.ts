import { Budget, Expense } from "@prisma/client";
import { ReactNode } from "react";

export type WithChild = { children: ReactNode };

export type BudgetWithExpense = Budget & {
  Expense: Expense[];
  _count: {
    Expense: number;
};
};

export type ExpenseWithBudget = Expense & {
  Budget: Budget;
};
