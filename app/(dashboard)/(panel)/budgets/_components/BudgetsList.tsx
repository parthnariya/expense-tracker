import { CreateBudgetForm } from "./CreateBudgetForm";

const BudgetsList = () => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudgetForm />
      </div>
    </div>
  );
};

export { BudgetsList };
