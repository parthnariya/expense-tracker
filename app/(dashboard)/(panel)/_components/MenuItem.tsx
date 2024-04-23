"use client";
import { WithChild } from "@/lib/type";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  id: number;
  link: string;
  name: string;
};

const MenuItem: FC<Props & WithChild> = ({ name, children, id, link }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === link) {
      setIsActive(() => true);
    } else {
      setIsActive(() => false);
    }
  }, [pathname, link]);
  return (
    <Link
      key={id}
      href={link}
      className={cn(
        "flex gap-2 items-center text-gray-500 font-medium p-5 rounded-full cursor-pointer hover:text-primary hover:bg-blue-100",
        isActive && "text-primary bg-blue-100"
      )}
    >
      {children}
      {name}
    </Link>
  );
};

export default MenuItem;
