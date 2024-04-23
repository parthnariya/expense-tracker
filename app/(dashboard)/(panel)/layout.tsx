import { WithChild } from "@/lib/type";
import { ClerkProvider } from "@clerk/nextjs";
import React, { FC } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

const PanelLayout: FC<WithChild> = ({ children }) => {
  return (
    <>
      <aside className="fixed md:w-64 hidden md:block">
        <Sidebar />
      </aside>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </>
  );
};

export default PanelLayout;
