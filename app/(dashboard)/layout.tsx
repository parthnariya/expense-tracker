import { WithChild } from "@/lib/type";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";

const DashboardLayout: FC<WithChild> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default DashboardLayout;
