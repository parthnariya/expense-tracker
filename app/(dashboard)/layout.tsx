import { Toaster } from "@/components/ui/toaster";
import { ModalContextProvider } from "@/contexts/ModelContextProvider";
import { WithChild } from "@/lib/type";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";

const DashboardLayout: FC<WithChild> = ({ children }) => {
  return (
    <ClerkProvider>
      <ModalContextProvider>
        <Toaster />
        {children}
      </ModalContextProvider>
    </ClerkProvider>
  );
};

export default DashboardLayout;
