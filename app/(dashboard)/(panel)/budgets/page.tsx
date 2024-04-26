import { prisma } from "@/lib/prisma";
import { BudgetsList } from "./_components/BudgetsList";
import { raw } from "@prisma/client/runtime/library";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const BudgetsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const budgets = await prisma.budget.findMany({
    where: {
      createdBy: userId,
    },
    include: {
      Expense: {
        select: {
          id: true,
          amount: true,
        },
      },
    },
  });
  const data = budgets.map((budget) => {
    const totalItem = budget.Expense.length;
    const totalSpent = budget.Expense.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    return {
      ...budget,
      totalItem,
      totalSpent,
    };
  });

  // console.log(data);
  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">My Budget</h2>
      <Suspense fallback={<BudgetsList.Skeleton />}>
        <BudgetsList data={data} />
      </Suspense>
    </main>
  );
};

export default BudgetsPage;
