import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Logo from "@/public/brand/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white text-sm md:text-base">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 bg-emerald-900 p-9">
        {FOOTER_LINKS.map((el, i) => (
          <div key={i}>
            <p className="text-xl brand-text">{el.title}</p>
            {el.links.map((link, i) => (
              <Link key={`footer-${i}`} href="/" className="block my-3">
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-emerald-950">
        <Image src={Logo} alt="" width={80} height={80} />
        <div className="flex flex-col md:flex-row text-sm">
          <Link className="block mx-2 px-2" href="/">
            Privacy Policy
          </Link>
          <Link className="block mx-2 px-2" href="/">
            Terms Of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
