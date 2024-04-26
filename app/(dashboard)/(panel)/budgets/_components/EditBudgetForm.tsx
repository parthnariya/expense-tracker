"use client";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/contexts/ModelContextProvider";
import { Edit3Icon } from "lucide-react";
import { useContext } from "react";

type PropsType = {
  id: string;
};

export const EditBudgetForm = ({ id }: PropsType) => {
  const { handleOpen } = useContext(ModalContext);

  return (
    <Button
      variant="default"
      className="flex gap-2 px-2 py-3"
        onClick={() => handleOpen()}
    >
      <Edit3Icon />
      Edit
    </Button>
  );
};
