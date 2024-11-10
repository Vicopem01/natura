import House from "@/public/img/house.png";
import Image from "next/image";

const Upgrade = () => {
  return (
    <section className="section my-20">
      <h2 className="pb-14 text-4xl font-semibold text-center">
        Ready to Upgrade Your Home?
      </h2>

      <div className="w-full mx-auto max-w-[634px]">
        <Image src={House} alt="" />
      </div>
    </section>
  );
};

export default Upgrade;
