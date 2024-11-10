import Renovate from "@/public/img/renovate.png";
import Qualify from "@/public/img/qualify.png";
import Celebrate from "@/public/img/celebrate.png";
import Image from "next/image";

const HowItWorksArray = [
  {
    title: "Qualify ✅",
    img: Qualify,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
  {
    title: "Renovate 🛠️",
    img: Renovate,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
  {
    title: "Celebrate 🎉",
    img: Celebrate,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
];
const HowItWorks = () => {
  return (
    <section className="section my-20">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <p className="mt-5 mb-6">We Simplify Your Path to Green Upgrades</p>
      <div className="flex w-full justify-between gap-6 text-center">
        {HowItWorksArray.map((el, idx) => (
          <div className="max-w-[335px]" key={idx}>
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
