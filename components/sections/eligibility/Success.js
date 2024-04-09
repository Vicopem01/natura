'use client'
import Image from "next/image";
import ThankYou from "@/public/icons/thank-you.png";
import Confetti from "@/components/UI/Confetti";
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-screen-trick grid place-content-center text-center">
        <div>
          <div className="mx-auto mt-0 mb-s4 max-w-[300px]">
            <Image src={ThankYou} alt="thank you graphic" />
          </div>
          <Confetti />
          <p className={`my-s3 font-medium `}>
            We have received your message. We&apos;ll get back to you shortly!
          </p>
          <div className="mt-5 mb-8">
            <Button onClick={() => router.push("/")}>Go Home</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
