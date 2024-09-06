import { DetailPage } from "@/components/detail-page";
import { fetchData } from "@/components/fetchData";
import { getImg } from "@/lib/utils";
import { CardType, Params } from "../../../../types";

export async function generateMetadata({ params }: Params) {
  const res = (await fetchData({ path: `tv/${params.id}` })) as CardType;
  const url = getImg(res.poster_path, "original");
  return {
    title: `${res.name}`,
    description: res.overview,
    openGraph: {
      images: [url],
    },
  };
}

const Page = ({ params }: Params) => {
  return (
    <div className="w-full">
      <DetailPage id={"tv/" + params.id} type="series" />
    </div>
  );
};

export default Page;
