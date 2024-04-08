import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";

const StageIntro = () => {
  const router = useRouter();
  return (
    <div className="text-center font-medium text-xl">
      <p className="my-4">Check your grant and loans eligibility here</p>
      <div className="mb-10">
        <Button onClick={() => router.push("/eligibility?stage=1")}>
          Begin
        </Button>
      </div>
    </div>
  );
};

export default StageIntro;
