import Button from "@/components/UI/Button";
import FormInput from "@/components/UI/FormInput";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const res = await axios.post("/api/eligible", data);
    router.push(`/eligibility?stage=2&id=${res.data.id}`);
  };

  return (
    <div className="text-sm font-normal">
      <form onSubmit={handleSubmit} className="block">
        <div>
          <FormInput
            label={"First and Last Name"}
            id="Name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder={"First and Last Name"}
          />
        </div>
        <div className="my-8 block">
          <FormInput
            label={"Email Address"}
            value={data.email}
            id="Email Address"
            placeholder="Email Address"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <FormInput
          label={"Phone"}
          type="phone"
          placeholder="Phone Number"
          id="Phone Number"
          value={data.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <div className="w-full max-w-96 mx-auto my-8 block border-emerald-900">
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
                  // border: "2px solid #064E3B",
                  borderRadius: "8px",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "#12082D",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#12082D",
                }),
                container: (provided) => ({
                  ...provided,
                  border: "2px solid #064E3B",
                  borderRadius: "8px",
                }),
              },
            }}
          />
        </div>
        <FormInput
          label={"Postal Code"}
          placeholder="Postal Code"
          id="Postal Code"
          value={data.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value)}
        />
        <div className="text-center my-6">
          <Button type="submit">Submit data</Button>
        </div>
      </form>
    </div>
  );
};

export default Stage1;
