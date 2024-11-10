import Image from "next/image";
import Logo from "@/public/brand/logo.svg";
import Lines from "./Lines";

const Footer = () => {
  return (
    <footer>
      <div className="bg-green w-full h-14"></div>
      <div className="section flex">
        <div className="w-8/12 mb-20">
          <Image src={Logo} alt="Logo" />
          <div className="grid grid-cols-4 mt-4">
            <div>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div></div>
            <div>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
            <div>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <Lines height={900} />
      </div>
    </footer>
  );
};

export default Footer;
