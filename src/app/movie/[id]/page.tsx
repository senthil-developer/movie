import { Metadata } from "next";
import { DetailPage } from "./detail-page";

export const metadata: Metadata = {
  title: "[id]",
  description: "[id]Page",
  icons: {
    icon: "/next.svg",
  },
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full">
      <DetailPage id={"movie/" + params.id} />
    </div>
  );
};

export default Page;
