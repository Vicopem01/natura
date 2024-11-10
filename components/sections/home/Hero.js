import Button from "@/components/UI/Button";
import HeroImg from "@/public/img/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section flex mb-20">
      <div className="flex-1 self-center">
        <h1 className="text-4xl font-bold">
          Unlock Government Grants <br />
          and{" "}
          <span className="text-green-dark decoration-yellow underline">
            Transform Your Home!
          </span>
        </h1>
        <p className="text-lg mt-9 mb-20">
          Get Expert Help Navigating Home Renovation, <br />
          Incentives and Funding
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="flex-1 max-w-lg max-h-lg">
        <Image src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
