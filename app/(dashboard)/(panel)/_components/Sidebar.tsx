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

const MenuItems = [
  { id: 1, name: "Dashboard", icon: LayoutGridIcon, link: "/dashboard" },
  { id: 2, name: "Budget", icon: PiggyBankIcon, link: "/dashboard" },
  { id: 3, name: "Expenses", icon: ReceiptTextIcon, link: "/dashboard" },
  { id: 4, name: "Upgrade", icon: ShieldCheckIcon, link: "/dashboard" },
];

const Sidebar = async () => {
  const user = await currentUser();
  return (
    <div className="h-screen p-5 border-r shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <div className="mt-5">
        {MenuItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex gap-2 items-center text-gray-500 font-medium p-5 rounded-full cursor-pointer hover:text-primary hover:bg-blue-100"
          >
            <item.icon />
            {item.name}
          </Link>
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
