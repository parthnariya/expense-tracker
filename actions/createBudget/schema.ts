import { z } from "zod";
export const CreateBudgetSchema = z.object({
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
  icon: z.string().optional(),
});
