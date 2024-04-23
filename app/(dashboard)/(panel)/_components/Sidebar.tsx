import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  LayoutGridIcon,
  PiggyBankIcon,
  ReceiptTextIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";

const MenuItems = [
  { id: 1, name: "Dashboard", icon: LayoutGridIcon, link: "/dashboard" },
  { id: 2, name: "Budgets", icon: PiggyBankIcon, link: "/budgets" },
  { id: 3, name: "Expenses", icon: ReceiptTextIcon, link: "/expense" },
  { id: 4, name: "Upgrade", icon: ShieldCheckIcon, link: "" },
];

const Sidebar = async () => {
  const user = await currentUser();
  return (
    <div className="h-screen p-5 border-r shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <div className="mt-5">
        {MenuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            link={item.link}
            name={item.name}
          >
            <item.icon />
          </MenuItem>
        ))}
      </div>
      <div className="fixed bottom-10 flex gap-2 items-center p-5">
        <UserButton />
        {user?.fullName}
      </div>
    </div>
  );
};

export default Sidebar;
