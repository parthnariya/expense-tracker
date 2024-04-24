import { WithChild } from "@/lib/type";
import { FC } from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

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
