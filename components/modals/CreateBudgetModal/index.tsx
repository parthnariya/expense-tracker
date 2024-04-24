"use client";

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
import { ModalContext } from "@/contexts/ModelContextProvider";
import { useUser } from "@clerk/nextjs";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { ElementRef, ElementType, useContext, useRef, useState } from "react";

export const CreateBudgetModal = () => {
  const { user } = useUser();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [emoji, setEmoji] = useState("🏠");
  const { handleClose, isOpen } = useContext(ModalContext);

  // const formRef = useRef<ElementRef<"form">>(null);

  if (!user) return null;

  const onEmojiClickHandler = (e: EmojiClickData) => {
    setEmoji(() => e.emoji);
    setEmojiPickerOpen(() => false);
  };

  const onSubmitHandler = (formData: FormData) => {
    const name = formData.get("name") as string;
    const amount = formData.get("amount") as string;
    console.log(
      {
        name,
        amount,
        emoji,
      },
      user.id
    );
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
                />
                <FormInput
                  id={"amount"}
                  label="Budget Amount"
                  className="text-sm px-2 py-1 h-10 font-medium transition"
                  placeholder="e.g. 5000"
                  type="number"
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
