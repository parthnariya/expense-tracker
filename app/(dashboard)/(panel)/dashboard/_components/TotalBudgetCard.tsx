import { PiggyBankIcon, ReceiptTextIcon, Wallet2Icon } from "lucide-react";

type PropsType = {
  totalBudget: number;
  totalSpends: number;
  noOfExpense: number;
};

function TotalBudgetCard({ noOfExpense, totalBudget, totalSpends }: PropsType) {
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-1 gap-5  lg:grid-cols-2 xl:grid-cols-3">
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">Total Budget</h2>
          <h2 className="font-bold text-2xl">${totalBudget}</h2>
        </div>
        <PiggyBankIcon className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">Total Spends</h2>
          <h2 className="font-bold text-2xl">${totalSpends}</h2>
        </div>
        <ReceiptTextIcon className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">No. of Expenses</h2>
          <h2 className="font-bold text-2xl">{noOfExpense}</h2>
        </div>
        <Wallet2Icon className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
      </div>
    </div>
  );
}

export default TotalBudgetCard;
