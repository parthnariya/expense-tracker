import { prisma } from "@/lib/prisma";
import EmptyPage from "./_components/EmptyPage";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { RedirectToSignIn } from "@clerk/nextjs";

const DashboardPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const budgets = await prisma.budgets.findFirst({
    where: {
      createdBy: userId,
    },
  });

  if (!budgets) return <EmptyPage />;

  // return <EmptyPage />;
  return <div>DashboardPage</div>;
};

export default DashboardPage;
