"use client";
import { BudgetWithExpense } from "@/lib/type";
import { cn, getPercentage } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

type Props = {
  budget: BudgetWithExpense;
};

const BudgetItem: FC<Props> = ({ budget }) => {
  // console.log(budget.totalSpent,budget.amount)
  const [percentage, setPercentage] = useState(
    getPercentage(budget.amount, budget.totalSpent)
  );
  useEffect(() => {
    setPercentage(() => getPercentage(budget.amount, budget.totalSpent));
  }, [budget]);
  return (
    <div className="p-5 border rounded-md cursor-pointer hover:shadow-md max-h-[170px]">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl py-3 px-4 bg-slate-100 rounded-full">
            {budget.icon}
          </h2>
          <div>
            <h2 className="font-bold ">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">
              {budget.totalItem} expenses
            </h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">${budget.amount}</h2>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <h2 className="text-xs text-slate-400">${budget.totalSpent}</h2>
          <h2 className="text-xs text-slate-400">
            ${budget.amount - budget.totalSpent}
          </h2>
        </div>
        <div className="w-[100%] h-2 bg-slate-200 rounded-full">
          <div
            className={cn("bg-primary h-2 rounded-full")}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export { BudgetItem };
