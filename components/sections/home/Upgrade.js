import House from "@/public/img/house.png";
import Image from "next/image";

const Upgrade = () => {
  return (
    <section className="section my-20 text-center">
      <h2 className="pb-14 text-4xl font-semibold">
        Ready to Upgrade Your Home?
      </h2>
      <p className="text-lg w-full md:w-1/2 mx-auto">
        We find funding, handle applications, and connect you with contractors
        to make your home improvement projects hassle-free.
      </p>

      <div className="w-full mx-auto max-w-[434px]">
        <Image src={House} alt="" />
      </div>
    </section>
  );
};

export default Upgrade;
