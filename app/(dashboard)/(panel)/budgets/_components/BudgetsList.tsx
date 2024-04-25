import { BudgetWithExpense } from "@/lib/type";
import { CreateBudgetForm } from "./CreateBudgetForm";
// import { FC } from "react";
import { BudgetItem } from "./BudgetItem";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  data: BudgetWithExpense[];
};

export const BudgetsList = ({ data }: Props) => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <CreateBudgetForm />
        {data.map((item) => (
          <BudgetItem budget={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

BudgetsList.Skeleton = function BudgetsListSkeleton() {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </div>
  );
};

// export { BudgetsList };
