import { BudgetWithExpense } from "@/lib/type";
import { FC } from "react";

type Props = {
  budget: BudgetWithExpense;
};

const BudgetItem: FC<Props> = ({ budget }) => {
  return <div>BudgetItem</div>;
};

export { BudgetItem };
