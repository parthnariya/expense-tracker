"use client";
import { deleteExpense } from "@/actions/deleteExpense";
import { toast } from "@/components/ui/use-toast";
import { useAction } from "@/hooks/useAction";
import { Trash2Icon } from "lucide-react";

type PropsTypes = {
  budgetId: string;
  id: string;
};

export const ExpenseAction = ({ budgetId, id }: PropsTypes) => {
  const { execute } = useAction(deleteExpense, {
    onSuccess(data) {
      toast({ title: `${data.name} is deleted` });
    },
    onError(error) {
      toast({ title: error, variant: "destructive" });
    },
  });

  const deleteClickHandler = () => {
    execute({ budgetId, id });
  };

  return (
    <div className="flex gap-2">
      <Trash2Icon
        className="text-destructive cursor-pointer"
        onClick={() => deleteClickHandler()}
      />
    </div>
  );
};
