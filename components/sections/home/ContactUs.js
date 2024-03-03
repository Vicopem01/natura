"use client";
import ig from "@/public/icons/ig.png";
import x from "@/public/icons/x.png";
import linkedin from "@/public/icons/linkedin.png";
import tiktok from "@/public/icons/tiktok.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const SOCIALS = [
  {
    url: "",
    image: ig,
  },
  {
    url: "",
    image: x,
  },
  {
    url: "",
    image: linkedin,
  },
  {
    url: "",
    image: tiktok,
  },
];

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    try {
      axios.post("/api/newsletter", { email: email.trim() });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center py-16">
      <p className="text-emerald-900 text-2xl font-bold"></p>
      <form onSubmit={handleSubmit}>
        <div className="relative bg-inherit w-full max-w-96 mx-auto my-5">
          <input
            type="email"
            id="email"
            className="peer w-full bg-transparent h-10 border-emerald-900 placeholder-transparent rounded-lg ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="Join our mailing list"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute cursor-text left-0 -top-6 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            Join our mailing list
          </label>
          <button
            className={`${
              email ? "bg-emerald-900" : "bg-gray-300	"
            } text-white rounded-full py-2 px-3 mt-5`}
          >
            Submit Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComingSoon;
