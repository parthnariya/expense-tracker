import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      <Button variant="default">
        <Link href="/sign-in">Get Started</Link>
      </Button>
    </header>
  );
};

export { Header };
