import { z } from "zod";
export const CreateExpenseSchema = z.object({
  name: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, { message: "Title is too short" }),
  amount: z.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount is required",
  }),
  budgetId: z.string({
    required_error: "BudgetId is required",
    invalid_type_error: "BudgetId is required",
  }),
});
