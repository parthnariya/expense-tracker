import { BudgetsList } from "./_components/BudgetsList";

const BudgetsPage = () => {
  return (
    <main className="p-10">
      <h2 className="font-bold text-3xl">My Budget</h2>
      <BudgetsList />
    </main>
  );
};

export default BudgetsPage;
