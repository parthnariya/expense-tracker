import { z } from "zod";
import { CreateBudgetSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Budgets } from "@prisma/client";

export type InputType = z.infer<typeof CreateBudgetSchema>;
export type ReturnType = ActionState<InputType, Budgets>;
