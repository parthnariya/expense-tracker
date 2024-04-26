import { z } from "zod";
export const DeleteExpenseSchema = z.object({
  id: z.string({
    required_error: "Id is required",
    invalid_type_error: "Id is required",
  }),
  budgetId: z.string({
    required_error: "budgetId is required",
    invalid_type_error: "budgetId is required",
  }),
});
