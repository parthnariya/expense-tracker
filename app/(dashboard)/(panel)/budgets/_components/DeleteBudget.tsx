"use client";
import { deleteBudget } from "@/actions/deleteBudget";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAction } from "@/hooks/useAction";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

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
    // console.log("hello")
    if (error) {
      toast({ title: error, variant: "destructive" });
    } else {
        execute({ id });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant="destructive"
          className="flex gap-2 px-2 py-3"
        //   onClick={() => deleteBudgetHandler()}
        >
          <TrashIcon />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete budget
            and remove all related expense from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteBudgetHandler()}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
