import { prisma } from "@/lib/prisma";
import { ArrowLeftIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { AddExpenseForm } from "../_components/AddExpenseForm";
import { BudgetItem } from "../../_components/BudgetItem";
import { DeleteBudget } from "../_components/DeleteBudget";
import ExpenseTable from "../_components/ExpenseTable";
import Link from "next/link";
import { EditBudgetForm } from "../_components/EditBudgetForm";

type BudgetPageIdProps = {
  params: {
    budgetId: string;
  };
};

const BudgetPage = async ({ params }: BudgetPageIdProps) => {
  const budget = await prisma.budget.findUnique({
    where: {
      id: params.budgetId,
    },
    include: {
      Expense: {
        orderBy: {
          updatedAt: "desc",
        },
      },
      _count: {
        select: {
          Expense: true,
        },
      },
    },
  });

  if (!budget) {
    redirect("/budgets");
  }

  const totalSpent = budget.Expense.reduce((prev, curren) => {
    const result = prev + curren.amount;
    return result;
  }, 0);

  const data = Object.assign(budget, {
    totalSpent,
    totalItem: budget.Expense.length,
  });

  return (
    <main className="p-10">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl flex items-center gap-2">
          <Link href={"/budgets"}>
            <ArrowLeftIcon className="cursor-pointer" />
          </Link>
          {budget.name}
        </h2>
        <div className="flex gap-2">
          {/* <EditBudgetForm id={budget.id} /> */}
          <DeleteBudget id={budget.id} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
        <BudgetItem budget={budget} />
        <AddExpenseForm
          budgetId={params.budgetId}
          remainingAmount={data.amount - data.totalSpent}
        />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Latest Expenses</h2>
        <div className="overflow-x-auto">
          <ExpenseTable data={data.Expense} />
        </div>
      </div>
    </main>
  );
};

export default BudgetPage;
