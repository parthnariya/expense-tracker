"use client";
import { deleteBudget } from "@/actions/deleteBudget";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAction } from "@/hooks/useAction";
import { TrashIcon } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

type PropsType = {
  id: string;
};

export const DeleteBudget = ({ id }: PropsType) => {
  const { push } = useRouter();

  const { execute, error } = useAction(deleteBudget, {
    onSuccess(data) {
      toast({
        title: `${data.name} deleted`,
      });
      push("/budgets");
    },
    onError(error) {
      toast({
        title: error,
        variant: "destructive",
      });
    },
  });
  const deleteBudgetHandler = () => {
    if (error) {
      toast({ title: error, variant: "destructive" });
    } else {
      execute({ id });
    }
  };
  return (
    <Button
      variant="destructive"
      className="flex gap-2 px-2 py-3"
      onClick={() => deleteBudgetHandler()}
    >
      <TrashIcon />
      Delete
    </Button>
  );
};
