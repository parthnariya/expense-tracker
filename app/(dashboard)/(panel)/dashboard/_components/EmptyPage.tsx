import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const EmptyPage = () => {
  return (
    <>
      {/*
  Graphic from https://www.opendoodles.com/
*/}

      <div className="grid mt-20 place-content-center bg-white px-4">
        <div className="text-center">
          <Image src={"/emptyIcon.svg"} alt="empty" width={568} height={924} />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can&apos;t find budgets.</p>
          <Button className="mt-5" variant="link">
            <Link href="/budgets">Add budget here</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmptyPage;
