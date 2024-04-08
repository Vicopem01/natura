import Button from "@/components/UI/Button";
import FormInput from "@/components/UI/FormInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Stage1 = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (name, val) => {
    setData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  return (
    <div className="text-lg font-medium">
      <div>
        <FormInput
          label={"First and Last Name"}
          id="Name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder={"First and Last Name"}
        />
        <FormInput
          label={"Email Address"}
          value={data.email}
          id="Email Address"
          placeholder="Email Address"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <FormInput
          label={"Phone"}
          type="phone"
          placeholder="Phone Number"
          id="Phone Number"
          value={data.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <div className="w-full max-w-96 mx-auto my-5 border-emerald-900">
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ca"],
              },
            }}
            selectProps={{
              defaultInputValue: data.address,
              onChange: (e) => handleChange("address", e.label),
              placeholder: "Type Address...",
              styles: {
                input: (provided) => ({
                  ...provided,
                  color: "#12082D",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "#12082D",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#12082D",
                }),
              },
            }}
          />
          <FormInput
            label={"Postal Code"}
            placeholder="Postal Code"
            id="Postal Code"
            value={data.phone}
            onChange={(e) => handleChange("postalCode", e.target.value)}
          />
        </div>
        <div className="text-center mb-6" >
          <Button>Submit data</Button>
        </div>
      </div>
    </div>
  );
};

export default Stage1;
