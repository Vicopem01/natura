import Logo from "@/public/brand/logo.svg";
import Image from "next/image";
import Lines from "./Lines";

const Header = () => {
  return (
    <header className="section flex justify-between font-semibold">
      <div>
        <Image src={Logo} alt="" />
      </div>
      <div className="flex items-center">
        <p>About </p>
        <p className="mx-8">Contact Us</p>
        <Lines />
      </div>
    </header>
  );
};

export default Header;
