import { prisma } from "@/lib/prisma";
import ExpenseList from "./_components/ExpenseList";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const ExpensePage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const data = await prisma.expense.findMany({
    where: {
      createdBy: user.id,
    },
    include: {
      Budget: true,
    },
  });

  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">Expenses</h2>
      <Suspense fallback={<ExpenseList.Skeleton />}>
        <ExpenseList data={data} />
      </Suspense>
    </main>
  );
};

export default ExpensePage;
