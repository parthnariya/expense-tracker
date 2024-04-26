import { Expense } from "@prisma/client";
import { ExpenseAction } from "./ExpenseAction";

type PropsTypes = {
  data: Expense[];
};
export default function ExpenseTable({ data }: PropsTypes) {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2 className="font-bold">Title</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="w-fit font-bold">Action</h2>
      </div>
      {data.length > 0 ? (
        data.map((item) => (
          <div className="grid grid-cols-4 p-2 hover:bg-slate-50" key={item.id}>
            <h2>{item.name}</h2>
            <h2 className="min-w-5">{item.amount}</h2>
            <h2 className="max-w-[130px]">{item.updatedAt.toDateString()}</h2>
            <h2 className="text-center">
              <ExpenseAction budgetId={item.budgetId} id={item.id} />
            </h2>
          </div>
        ))
      ) : (
        <div className="grid place-content-center bg-white px-4 mt-10">
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>
            <p className="mt-4 text-gray-500">Expense not found</p>
          </div>
        </div>
      )}
    </div>
  );
}
