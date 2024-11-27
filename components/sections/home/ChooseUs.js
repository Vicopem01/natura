import Handshake from "@/public/img/handshake.png";
import Expert from "@/public/img/expert.png";
import Image from "next/image";
import Button from "@/components/UI/Button";

const ChooseUs = () => {
  return (
    <section className="section my-20 text-center md:text-left">
      <div className="flex justify-center items-center mb-28 flex-col md:flex-row">
        <div className="flex-1">
          <div className="w-9/12 mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Why Choose Us?
            </h2>
            <h2 className="text-xl md:text-4xl mt-4 font-semibold text-green-dark underline decoration-yellow">
              Maximize Your Savings with Trusted Guidance
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <Image src={Handshake} alt="" className="max-w-[335px] mx-auto" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col-reverse md:flex-row">
        <div className="flex-1">
          <Image src={Expert} alt="" className="max-w-[335px] mx-auto" />
        </div>
        <div className="flex-1">
          <div className="w-9/12 mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let the experts manage the renovations for you, start to finish
            </h2>
            <div className="md:my-0 my-8">
              <Button type="link" href="/apply">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
