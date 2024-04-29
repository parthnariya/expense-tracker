import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BudgetChart } from "./_components/Budgetchart";
import EmptyPage from "./_components/EmptyPage";
import TotalBudgetCard from "./_components/TotalBudgetCard";
import { TrendsChart } from "./_components/TrendsChart";

const DashboardPage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  const totalBudget = await prisma.budget.aggregate({
    where: {
      createdBy: user.id,
    },
    _sum: {
      amount: true,
    },
  });

  const totalExpense = await prisma.expense.aggregate({
    where: {
      createdBy: user.id,
    },
    _sum: {
      amount: true,
    },
    _count: true,
  });

  if (!totalBudget._sum.amount) return <EmptyPage />;

  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">Hello, {user.fullName} &#9996;</h2>
      <p className="text-gray-500">
        Here&apos;s what happening with your money!
      </p>

      <TotalBudgetCard
        noOfExpense={totalExpense._count}
        totalBudget={totalBudget._sum.amount}
        totalSpends={totalExpense._sum.amount ?? 0}
      />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-6 gap-3">
        <BudgetChart />
        <TrendsChart />
      </div>
    </main>
  );
};

export default DashboardPage;
