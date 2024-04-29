import { Skeleton } from "@/components/ui/skeleton";
import { ExpenseWithBudget } from "@/lib/type";
import Link from "next/link";
// import { ExpenseAction } from "./ExpenseAction";

type PropsTypes = {
  data: ExpenseWithBudget[];
};
export default function ExpenseList({ data }: PropsTypes) {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-2">
      <thead className="text-left">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Amount
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Date
          </th>

          <th className="px-4 py-2">Budget</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.amount}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.updatedAt.toDateString()}
              </td>

              <td className="whitespace-nowrap px-4 py-2 hover:text-primary cursor-pointer">
                <Link href={`/budgets/${item.budgetId}`}>
                  {item.Budget.name}
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <>
            <td></td>
            <td className="min-w-full">
              <div className="text-center mt-7">
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Uh-oh!
                </p>
                <p className="mt-4 text-gray-500">Expense not found</p>
              </div>
            </td>
            <td></td>
          </>
        )}
      </tbody>
    </table>
  );
}
ExpenseList.Skeleton = function ExpenseSkeleton() {
    return <div className="mt-7">
        <Skeleton className="h-8 mt-1"/>
        <Skeleton className="h-8 mt-1"/>
        <Skeleton className="h-8 mt-1"/>
        <Skeleton className="h-8 mt-1"/>
        <Skeleton className="h-8 mt-1"/>
    </div>
}

