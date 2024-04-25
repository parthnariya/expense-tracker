"use client";

import FormInput from "@/components/form/FormInput";
import FormSubmit from "@/components/form/FormSubmit";

export const AddExpenseForm = () => {
  return (
    <div className="p-5 border rounded-md ">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <form
        className="w-full p-3 rounded-md bg-white space-y-4"
        // action={onSubmitHandler}
        // ref={formRef}
      >
        <FormInput
          id={"name"}
          label="Title"
          className="text-sm px-2 py-1 h-10 font-medium transition"
          placeholder="e.g. Rent Payment"
          // errors={fieldErrors}
        />
        <FormInput
          id={"amount"}
          label="Amount"
          className="text-sm px-2 py-1 h-10 font-medium transition"
          placeholder="e.g. $3000"
          type="number"
          // errors={fieldErrors}
        />
        <FormSubmit className="w-full">Add New Expense</FormSubmit>
      </form>
    </div>
  );
};
