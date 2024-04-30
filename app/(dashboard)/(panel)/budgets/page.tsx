import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { BudgetsList } from "./_components/BudgetsList";

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
      Expense: true,
      _count: {
        select: {
          Expense: true,
        },
      },
    },
  });

  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">My Budget</h2>
      <Suspense fallback={<BudgetsList.Skeleton />}>
        <BudgetsList data={budgets} />
      </Suspense>
    </main>
  );
};

export default BudgetsPage;
