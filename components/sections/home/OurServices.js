import house1 from "@/public/icons/house-1.png";
import house2 from "@/public/icons/house-2.png";
import house3 from "@/public/icons/house-3.png";
import house4 from "@/public/icons/house-4.png";
import house5 from "@/public/icons/house-5.png";
import house6 from "@/public/icons/house-6.png";
import Image from "next/image";

const OUR_SERVICES = [
  {
    image: house1,
    text: "Rebates + Incentives",
  },
  {
    image: house2,
    text: "Renovation Planning + Upgrades",
  },
  {
    image: house3,
    text: "Net Zero Homes",
  },
  {
    image: house4,
    text: "Home Energy Evaluation",
  },
  {
    image: house5,
    text: "Financing",
  },
  {
    image: house6,
    text: "Apartments + Condos",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#f2f8fb] p-8">
      <h2 className="text-5xl font-bold py-4 text-center text-emerald-900">
        Our Services
      </h2>
      <p className="text-3xl font-bold text-center text-emerald-900 mb-6">
        Coming Soon
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {OUR_SERVICES.map((data, i) => (
          <div
            key={i}
            className="w-full bg-white p-4 rounded-lg lg:text-xl text-base font-bold flex flex-col justify-center items-center text-center"
          >
            <Image src={data.image} alt="" width={60} height={60} />
            <span className="pt-5 pb-2 text-emerald-900">{data.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
