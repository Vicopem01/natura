import { NAV_LINKS } from "@/constants";
import Logo from "@/public/brand/logo.png";
import Image from "next/image";
import Link from "next/link";

const CTAButton = () => {
  return (
    <Link
      href="/eligibility"
      className="py-3 px-4 bg-emerald-900 rounded-full text-white"
    >
      Check Elegibility
    </Link>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between px-4 py-3 items-center text-sm md:text-base">
      <div>
        <Link href="/">
          <Image src={Logo} alt="" width={80} height={80} />
          <p className="text-center font-bold text-emerald-900">NATURA</p>
        </Link>
      </div>
      <div className="">
        {NAV_LINKS.map((el, i) => (
          <Link
            href={el.link || "/"}
            className="py-3 px-5 font-semibold hidden md:inline"
            key={i}
          >
            {el.text}
          </Link>
        ))}
        <CTAButton />
      </div>
    </header>
  );
};

export default Header;
