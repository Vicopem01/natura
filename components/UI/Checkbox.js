import { useState } from "react";

const CheckBox = ({ label, onChange, name, labelClasses }) => {
  const [isChecked, setIschecked] = useState(false);
  return (
    <label className={`flex cursor-pointer items-center text-xl text-white`}>
      <span
        className={`mr-4 flex h-5 w-5 items-center justify-center ${
          isChecked ? "bg-green-400	" : "bg-white"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 border-2 border-black ${
            isChecked ? "gradient-1" : "bg-black"
          }`}
        ></span>
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIschecked(!isChecked);
          onChange(e);
        }}
        name={name}
        className="hidden"
      />
      <span className={`${labelClasses}`}>{label}</span>
    </label>
  );
};

export default CheckBox;
