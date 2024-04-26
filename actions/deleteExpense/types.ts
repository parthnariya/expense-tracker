import { z } from "zod";
import { DeleteExpenseSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Expense } from "@prisma/client";

export type InputType = z.infer<typeof DeleteExpenseSchema>;
export type ReturnType = ActionState<InputType, Expense>;
