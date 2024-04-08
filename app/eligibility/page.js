"use client";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import StageIntro from "@/components/sections/eligibility/StageIntro";
import Stage1 from "@/components/sections/eligibility/Stage1";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Elegibility = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stage = searchParams.get("stage");
  useEffect(() => {
    if (!stage) router.push("/eligibility?stage=start");
  }, []);

  return (
    <>
      <Header />
      {stage === "start" && <StageIntro />}
      {stage === "1" && <Stage1 />}
      <Footer />
    </>
  );
};

export default Elegibility;
