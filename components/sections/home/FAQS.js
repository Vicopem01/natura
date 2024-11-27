"use client";
import Arrow from "@/public/icons/arrow.svg";
import Image from "next/image";
import { useState } from "react";

const FAQs = [
  {
    question: "What do we do?",
    answer:
      "We specialize in finding grants, incentives, and rebates for home retrofitting, clean energy installations, and general home improvement projects. We assist with applications, offer ongoing support, and connect you with trusted contractors to complete your project.",
  },
  {
    question: "Who can use your service?",
    answer:
      "Homeowners, landlords, and businesses planning retrofitting or clean energy projects are eligible. We tailor solutions based on individual needs and eligibility criteria.",
  },
  {
    question: "What types of projects do you support?",
    answer:
      "We support energy-efficient retrofitting, solar panel installations, heat pumps, insulation upgrades, energy-efficient appliances, and general home improvement projects.",
  },
  {
    question: "How do you find the grants and incentives?",
    answer:
      "We use proprietary tools and databases to identify local, state, and federal programs as well as private initiatives that align with your project.",
  },
  {
    question: "Am I guaranteed to get a grant or rebate?",
    answer:
      "While we cannot guarantee success, our expertise and thorough application process significantly increase your chances of approval.",
  },
  {
    question: "Do you manage the entire project?",
    answer:
      "Yes, we provide end-to-end support—from identifying funding opportunities to managing applications and connecting you with contractors.",
  },
  {
    question: "How do you choose the contractors?",
    answer:
      "We vet contractors based on their expertise, licensing, customer reviews, and past performance in similar projects.",
  },
  {
    question: "Do you work with rental properties?",
    answer:
      "Yes, we work with landlords and property managers to secure funding for rental property improvements.",
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
      <div className="section py-20">
        <h2 className="pb-10 text-4xl font-semibold text-center">
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
