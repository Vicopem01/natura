"use client";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import StageIntro from "@/components/sections/eligibility/StageIntro";
import Stage1 from "@/components/sections/eligibility/Stage1";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Elegibility = () => {
  const searchParams = useSearchParams();
  const [stage, setStage] = useState("");
  const router = useRouter();
  useEffect(() => {
    const stageRoute = searchParams.get("stage");
    if (!stageRoute) router.push("/eligibility?stage=start");
    else setStage(stageRoute);
  }, []);

  return (
    <Suspense>
      <Header />
      {stage === "start" && <StageIntro />}
      {stage === "1" && <Stage1 />}
      <Footer />
    </Suspense>
  );
};

export default Elegibility;
