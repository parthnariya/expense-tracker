import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EmptyPage from "./_components/EmptyPage";
import TotalBudgetCard from "./_components/TotalBudgetCard";
import { BudgetChart } from "./_components/Budgetchart";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
        <div className="lg:col-span-2">
          <BudgetChart />
        </div>
        <div>Other Content</div>
      </div>
    </main>
  );
};

export default DashboardPage;
