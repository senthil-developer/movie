import { DetailPage } from "@/components/detail-page";
import { fetchData } from "@/components/fetchData";
import { getDept, getImg } from "@/lib/utils";
import { Params } from "../../../../types";
import { Person } from "./person";

export async function generateMetadata({ params }: Params) {
  const person = await fetchData({ path: `person/${params.id}` });
  const dept = getDept(person);
  const url = getImg(person.profile_path, "original");
  return {
    title: `${person.name} | ${dept}`,
    description: person.biography,
    openGraph: {
      images: [url],
    },
  };
}
const Page = ({ params }: Params) => {
  return <Person id={`person/${params.id}`} />;
};

export default Page;
