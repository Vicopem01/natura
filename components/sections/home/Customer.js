import Image from "next/image";
import CustomerImg from "@/public/img/customer.png";

const Customer = () => {
  return (
    <section className="section my-20">
      <h2 className="text-4xl font-semibold text-center mb-14">
        See what customers are saying
      </h2>
      <div className="flex items-center justify-center">
        <div className="mr-28">
          <Image src={CustomerImg} alt="" />
        </div>
        <div className="text-lg">
          <div className="max-w-[450px] mx-auto">
            <p>
              “Natura helped me fix my house and made the process super easy.
              Your One-Stop Solution for Eco-Friendly Renovations. 5/5 stars”
            </p>
            <p className="italic text-right mt-9">-John, Ontario</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
