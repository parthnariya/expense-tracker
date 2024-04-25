import { toast } from "@/components/ui/use-toast";
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
    toast({
      title: "Budget not fount",
      variant: "destructive",
    });
    redirect("/budgets");
  }

  const totalSpent = budget.Expense.reduce((prev, curren) => {
    const result = prev + curren.amount;
    return result;
  }, 0);

  Object.assign(budget, { totalSpent, totalItem: budget.Expense.length });
  console.log(budget);

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BudgetItem budget={budget} />
        <AddExpenseForm />
      </div>
    </main>
  );
};

export default BudgetPage;
