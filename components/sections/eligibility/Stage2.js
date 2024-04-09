import Button from "@/components/UI/Button";
import { ELIGIBILITY_QUESTIONS_1 } from "@/constants";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Stage2 = () => {
  const searchParams = useSearchParams();
  const [state, setState] = useState({});
  const router = useRouter();
  const id = searchParams.get("id");

  const handleChange = (i, data) =>
    setState((prev) => ({
      ...prev,
      [`${i + 1}`]: data,
    }));

  const handleSubmit = async () => {
    await axios.post(`/api/eligible?stage=2&id=${id}`, state);
    router.push(`/eligibility?stage=3&id=${id}`);
  };

  return (
    <div className="px-16 max-w-2xl mx-auto">
      <ol className="list-decimal">
        {ELIGIBILITY_QUESTIONS_1.map((data, idx) => (
          <li key={idx} className="pb-4">
            <p className="my-3">{data.question}</p>
            <div>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    handleChange(idx, e.target.checked ? "Yes" : "No")
                  }
                  checked={state[idx + 1] === "Yes"}
                />
                <span className="pl-2">Yes</span>
              </label>
              <label className="ml-8">
                <input
                  type="radio"
                  onChange={(e) =>
                    handleChange(idx, e.target.checked ? "No" : "Yes")
                  }
                  checked={state[idx + 1] === "No"}
                />
                <span className="pl-2">No</span>
              </label>
            </div>
          </li>
        ))}
      </ol>
      <div className="w-full text-center mt-4 mb-8">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Stage2;
