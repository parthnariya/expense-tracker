import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center">
      <div></div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
