import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EmptyPage from "./_components/EmptyPage";
import TotalBudgetCard from "./_components/TotalBudgetCard";
import { BudgetChart } from "./_components/Budgetchart";
import { BudgetItem } from "../_components/BudgetItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendsChart } from "./_components/TrendsChart";
const data = {
  id: "662b6c2af757a54369aa6757",
  name: "Stock Market",
  amount: 10000,
  icon: "💰",
  createdBy: "user_2bil4OWx6Coeos8qKK8k4uAJF3u",
  createdAt: new Date("2024-04-26T08:56:10.000Z"),
  updatedAt: new Date("2024-04-26T08:56:10.000Z"),
  Expense: [
    { id: "662b6c3af757a54369aa6758", amount: 2000 },
    { id: "662b6c43f757a54369aa6759", amount: 2000 },
  ],
  totalItem: 2,
  totalSpent: 4000,
};

const DashboardPage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  const budgets = await prisma.budget.findFirst({
    where: {
      createdBy: user.id,
    },
  });

  if (!budgets) return <EmptyPage />;

  // return <EmptyPage />;
  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">Hello, {user.fullName} &#9996;</h2>
      <p className="text-gray-500">
        Here&apos;s what happening with your money!
      </p>

      <TotalBudgetCard noOfExpense={10} totalBudget={1000} totalSpends={400} />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-6 gap-3">
        <BudgetChart />
        <TrendsChart />
      </div>
      <div>
          
      </div>
    </main>
  );
};

export default DashboardPage;
