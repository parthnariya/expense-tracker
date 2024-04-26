import { z } from "zod";
import { DeleteBudgetSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Budget, Expense } from "@prisma/client";

export type InputType = z.infer<typeof DeleteBudgetSchema>;
export type ReturnType = ActionState<InputType, Budget>;
