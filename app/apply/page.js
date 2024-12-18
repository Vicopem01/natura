"use client";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { Widget } from "@typeform/embed-react";

const Form = () => {
  return (
    <>
      <Header />
      <section className="section m-horizontal my-4 pt-s4 text-white md:-mt-s8 md:pt-s8">
        <div className="h-[38rem] w-full">
          <Widget id="WFBqMR2f" style={{ width: "100%", height: "100%" }} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Form;
