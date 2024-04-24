import { prisma } from "@/lib/prisma";
import { BudgetsList } from "./_components/BudgetsList";
import { raw } from "@prisma/client/runtime/library";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const BudgetsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const expenseData = await prisma.expense.groupBy({
    by: "budgetId",
    _count: true,
    _sum: {
      amount: true,
    },
    where: {
      createdBy: userId,
    },
  });
  const budgetIds = expenseData.map((item) => item.budgetId);

  const budgets = await prisma.budget.findMany({
    where: {
      id: {
        in: budgetIds,
      },
    },
  });

  const budgetByIds = Object.fromEntries(
    budgets.map((budget) => [budget.id, budget])
  );

  const data = expenseData.map((item) => {
    const budget = budgetByIds[item.budgetId];
    return {
      ...budget,
      totalItem: item._count,
      totalSpent: Number(item._sum.amount),
    };
  });

  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">My Budget</h2>
      <BudgetsList data={data} />
    </main>
  );
};

export default BudgetsPage;
