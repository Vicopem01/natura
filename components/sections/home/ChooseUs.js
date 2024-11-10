import Handshake from "@/public/img/handshake.png";
import Expert from "@/public/img/expert.png";
import Image from "next/image";
import Button from "@/components/UI/Button";

const ChooseUs = () => {
  return (
    <section className="section my-20">
      <div className="flex justify-center items-center mb-28">
        <div className="flex-1">
          <div className="w-9/12 mx-auto">
            <h2 className="text-4xl font-semibold">Why Choose Us?</h2>
            <h2 className="text-4xl mt-4 font-semibold text-green-dark underline decoration-yellow">
              Maximize Your Savings with Trusted Guidance
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <Image src={Handshake} alt="" className="max-w-[335px] mx-auto" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <Image src={Expert} alt="" className="max-w-[335px] mx-auto" />
        </div>
        <div className="flex-1">
          <div className="w-9/12 mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Let the experts manage the renovations for you, start to finish
            </h2>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
