import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      <Button variant="default">Get Started</Button>
    </header>
  );
};

export { Header };
