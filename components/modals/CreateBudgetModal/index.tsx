"use client";

import { createBoard } from "@/actions/createBudget";
import FormInput from "@/components/form/FormInput";
import FormSubmit from "@/components/form/FormSubmit";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast, useToast } from "@/components/ui/use-toast";
import { ModalContext } from "@/contexts/ModelContextProvider";
import { useAction } from "@/hooks/useAction";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useContext, useState } from "react";

export const CreateBudgetModal = () => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [emoji, setEmoji] = useState("🏠");
  const { handleClose, isOpen } = useContext(ModalContext);

  const { toast } = useToast();

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      toast({
        title: `${data.name} created`,
      });
    },
    onError(error) {
      toast({
        title: error,
        variant: "destructive",
      });
    },
  });

  // const formRef = useRef<ElementRef<"form">>(null);

  const onEmojiClickHandler = (e: EmojiClickData) => {
    setEmoji(() => e.emoji);
    setEmojiPickerOpen(() => false);
  };

  const onSubmitHandler = (formData: FormData) => {
    const name = formData.get("name") as string;
    const amount = +(formData.get("amount") as string);
    execute({ name, amount, icon: emoji });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Budget</DialogTitle>
          <DialogDescription>
            <div className="mt-5">
              <Button
                variant="outline"
                onClick={() => setEmojiPickerOpen(true)}
                className="text-lg"
                size="sm"
              >
                {emoji}
              </Button>
              <div className="absolute">
                <EmojiPicker
                  open={emojiPickerOpen}
                  onEmojiClick={onEmojiClickHandler}
                />
              </div>
              <form
                className="w-full p-3 rounded-md bg-white space-y-4"
                action={onSubmitHandler}
                // ref={formRef}
              >
                <FormInput
                  id={"name"}
                  label="Budget Title"
                  className="text-sm px-2 py-1 h-10 font-medium transition"
                  placeholder="e.g. Home Decor"
                  errors={fieldErrors}
                />
                <FormInput
                  id={"amount"}
                  label="Budget Amount"
                  className="text-sm px-2 py-1 h-10 font-medium transition"
                  placeholder="e.g. 5000"
                  type="number"
                  errors={fieldErrors}
                />
                <FormSubmit>Create</FormSubmit>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
