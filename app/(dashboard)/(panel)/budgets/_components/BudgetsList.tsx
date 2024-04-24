"use client";

import { BudgetWithExpense } from "@/lib/type";
import { CreateBudgetForm } from "./CreateBudgetForm";
import { FC } from "react";
import { BudgetItem } from "./BudgetItem";

type Props = {
  data: BudgetWithExpense[];
};

const BudgetsList: FC<Props> = ({ data }) => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudgetForm />
        {data.map((item) => (
          <BudgetItem budget={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { BudgetsList };
