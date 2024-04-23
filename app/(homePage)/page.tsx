import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "./_components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-50 flex flex-col items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Manage Your Expense
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Control Your Money{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button>Get Started</Button>

              <Button variant="link" className="text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={"/image.png"}
          alt="dashboard"
          width={1000}
          height={700}
          className="mt-5 rounded-xl border-2"
        />
      </section>
    </>
  );
};

export default HomePage;
