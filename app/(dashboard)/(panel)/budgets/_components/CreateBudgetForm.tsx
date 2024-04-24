"use client";

import { DialogTrigger } from "@/components/ui/dialog";
import { ModalContext } from "@/contexts/ModelContextProvider";
import { useContext } from "react";

export const CreateBudgetForm = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <div role="button" onClick={() => handleOpen()}>
      <div className="bg-slate-100 p-10 rounded-md flex items-center flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
        <h2 className="text-3xl">+</h2>
        <h2>Create New Budget</h2>
      </div>
    </div>
  );
};
