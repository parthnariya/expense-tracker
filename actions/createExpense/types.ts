import { z } from "zod";
import { CreateExpenseSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Expense } from "@prisma/client";

export type InputType = z.infer<typeof CreateExpenseSchema>;
export type ReturnType = ActionState<InputType, Expense>;
