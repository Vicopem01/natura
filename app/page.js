import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import ChooseUs from "@/components/sections/home/ChooseUs";
import Customer from "@/components/sections/home/Customer";
import FAQS from "@/components/sections/home/qss";
import Hero from "@/components/sections/home/Hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Upgrade from "@/components/sections/home/Upgrade";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ChooseUs />
      <Customer />
      <FAQS />
      <Upgrade />
      <Footer />
    </>
  );
}
