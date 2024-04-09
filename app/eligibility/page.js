"use client";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import StageIntro from "@/components/sections/eligibility/StageIntro";
import Stage1 from "@/components/sections/eligibility/Stage1";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Stage2 from "@/components/sections/eligibility/Stage2";
import Success from "@/components/sections/eligibility/Success";
import Stage3 from "@/components/sections/eligibility/Stage3";

const Elegibility = () => {
  const searchParams = useSearchParams();
  const stage = searchParams.get("stage");
  const router = useRouter();
  useEffect(() => {
    if (!stage) router.push("/eligibility?stage=start");
  }, []);

  return (
    <>
      <Header />
      <div className="my-5">
        {stage === "start" && <StageIntro />}
        {stage === "1" && <Stage1 />}
        {stage === "2" && <Stage2 />}
        {stage === "3" && <Stage3 />}
        {stage === "success" && <Success />}
      </div>
      <Footer />
    </>
  );
};

export default Elegibility;
