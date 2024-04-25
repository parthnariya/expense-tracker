import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AddExpenseForm } from "../_components/AddExpenseForm";
import { BudgetItem } from "../_components/BudgetItem";

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
  console.log(data);

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BudgetItem budget={data} />
        <AddExpenseForm
          budgetId={params.budgetId}
          remainingAmount={data.amount - data.totalSpent}
        />
      </div>
    </main>
  );
};

export default BudgetPage;
