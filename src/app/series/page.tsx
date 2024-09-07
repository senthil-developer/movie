import { Explore } from "@/components/explore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series",
};

const series = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Explore type="tv" />
    </div>
  );
};

export default series;
