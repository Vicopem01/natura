"use client";

import { useState } from "react";
import axios from "axios";
import ButtonLoader from "@/components/UI/ButtonLoader";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      axios.post("/api/newsletter", { email: email.trim() });
      setIsLoading(false);
      setIsSaved(true);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center py-16">
      {/* <p className="text-emerald-900 text-2xl font-bold"></p> */}
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
          {!isSaved && (
            <button
              className={`${
                email ? "bg-emerald-900" : "bg-gray-300	"
              } text-white rounded-full py-2 mt-5 w-32`}
            >
              {isLoading ? <ButtonLoader /> : "Submit Email"}
            </button>
          )}
        </div>
      </form>
      {isSaved && <p>Email added successfully</p>}
    </div>
  );
};

export default ComingSoon;
