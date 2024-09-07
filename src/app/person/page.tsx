import { Explore } from "@/components/explore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Person",
};

const PersonPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Explore type="person" />
    </div>
  );
};

export default PersonPage;
