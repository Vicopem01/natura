import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import ComingSoon from "@/components/sections/home/ContactUs";
import Grants from "@/components/sections/home/Grants";
import OurServices from "@/components/sections/home/OurServices";

export default function Home() {
  return (
    <>
      <Header />
      <Grants />
      <OurServices />
      <ComingSoon />
      <Footer />
    </>
  );
}
