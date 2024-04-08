import Button from "@/components/UI/Button";
import FormInput from "@/components/UI/FormInput";
import { useRouter } from "next/navigation";

const Stage1 = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <FormInput
          label={"First and Last Name"}
          // value={undefined}
          placeholder={"First and Last Name"}
        />
        <FormInput
          label={"Email Address"}
          // value={undefined}
          placeholder="Email Address"
        />
        <FormInput
          label={"Phone"}
          // value={undefined}
          type="phone"
          placeholder="Phone Number"
        />
      </div>
    </div>
  );
};

export default Stage1;
