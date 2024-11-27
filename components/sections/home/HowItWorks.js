import Renovate from "@/public/img/renovate.png";
import Qualify from "@/public/img/qualify.png";
import Celebrate from "@/public/img/celebrate.png";
import Image from "next/image";

const HowItWorksArray = [
  {
    title: "Find Opportunities",
    img: Qualify,
    desc: "We identify all grants, rebates, and incentives you qualify for based on your project and location.",
  },
  {
    title: "Simplify Applications",
    img: Renovate,
    desc: "We take care of the paperwork and manage the entire application process for you.",
  },
  {
    title: "Execute Your Project",
    img: Celebrate,
    desc: "Once approved, we connect you with top contractors to finish your project efficiently.",
  },
];
const HowItWorks = () => {
  return (
    <section className="section my-20 text-center md:text-left">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <p className="mt-5 mb-6">We Simplify Your Path to Green Upgrades</p>
      <div className="flex w-full md:justify-between gap-6 text-center flex-col md:flex-row justify-center items-center">
        {HowItWorksArray.map((el, idx) => (
          <div className="max-w-[280px]" key={idx}>
            <div>
              <Image src={el.img} alt="" className="w-full h-full" />
            </div>
            <h3 className="text-3xl font-semibold mt-5 mb-6">{el.title}</h3>
            <h3 className="text-lg">{el.desc}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
