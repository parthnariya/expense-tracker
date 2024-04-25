"use client";

import { createExpense } from "@/actions/createExpense";
import FormInput from "@/components/form/FormInput";
import FormSubmit from "@/components/form/FormSubmit";
import { toast } from "@/components/ui/use-toast";
import { useAction } from "@/hooks/useAction";
import { ElementRef, useRef } from "react";

type PropsType = {
  budgetId: string;
  remainingAmount: number;
};

export const AddExpenseForm = ({ budgetId, remainingAmount }: PropsType) => {
  const formRef = useRef<ElementRef<"form">>(null);

  const { execute, fieldErrors } = useAction(createExpense, {
    onSuccess(data) {
      toast({ title: `${data.name} is created!` });
      formRef.current?.reset();
    },
    onError(error) {
      toast({ title: error, variant: "destructive" });
    },
  });

  const onSubmitHandler = (formData: FormData) => {
    const name = formData.get("name") as string;
    const amount = +(formData.get("amount") as string);
    if (amount > remainingAmount) {
      toast({ title: "Not enough Amount in budget", variant: "destructive" });
    } else {
      execute({ amount, name, budgetId });
    }
  };

  return (
    <div className="p-5 border rounded-md ">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <form
        className="w-full p-3 rounded-md bg-white space-y-4"
        action={onSubmitHandler}
        ref={formRef}
      >
        <FormInput
          id={"name"}
          label="Title"
          className="text-sm px-2 py-1 h-10 font-medium transition"
          placeholder="e.g. Rent Payment"
          errors={fieldErrors}
        />
        <FormInput
          id={"amount"}
          label="Amount"
          className="text-sm px-2 py-1 h-10 font-medium transition"
          placeholder="e.g. $3000"
          type="number"
          errors={fieldErrors}
        />
        <FormSubmit className="w-full">Add New Expense</FormSubmit>
      </form>
    </div>
  );
};
