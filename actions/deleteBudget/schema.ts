import { z } from "zod";
export const DeleteBudgetSchema = z.object({
  id: z.string({
    required_error: "Id is required",
    invalid_type_error: "Id is required",
  }),
});
