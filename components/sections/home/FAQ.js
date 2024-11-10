"use client";
import Arrow from "@/public/icons/arrow.svg";
import Image from "next/image";
import { useState } from "react";

const FAQs = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How do you clone a Webflow Template from the Showcase?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl text-black my-4 block cursor-pointer px-6 py-10"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full justify-between items-start">
        <p className="text-green-dark text-2xl self-center">{question}</p>
        <span
          className={`shadow-[-2px_0px_17px_6px_rgba(0,_0,_0,_0.1)] duration-500 transition-all w-12 h-12 rounded-full flex items-center justify-center ${
            isOpen ? "-rotate-90 bg-green" : "bg-white"
          }`}
        >
          <Image
            src={Arrow}
            alt=""
            className={`object-center ${isOpen ? "" : "brightness-0"}`}
          />
        </span>
      </div>
      {isOpen && <p className="text-lg">{answer}</p>}
    </div>
  );
};

const FAQS = () => {
  return (
    <section className="bg-green text-white">
      <div className="section py-24">
        <h2 className="pb-14 text-4xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div>
          {FAQs.map((el, idx) => (
            <Faq key={idx} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
