import { DetailPage } from "@/components/detail-page";
import { fetchData } from "@/components/fetchData";
import { getDept, getImg } from "@/lib/utils";
import { CardType, Params } from "../../../../types";

export async function generateMetadata({ params }: Params) {
  const person = await fetchData({ path: `person/${params.id}` });
  const dept = getDept(person);
  const image = person.profile_path.slice(1);
  const url = getImg(person.poster_path, "original");
  return {
    title: `${person.name} | ${dept}`,
    description: person.biography,
    openGraph: {
      images: [url],
    },
  };
}
const Page = async ({ params }: Params) => {
  return <h1></h1>;
};

export default Page;
//  <div className="mx-auto mt-8 w-full lg:w-[80%]">
//    <div className=" mx-auto flex max-w-fit gap-10">
//      <div className="my-auto">
//        <span className="flex">
//          Name : <h1> {person.name}</h1>
//        </span>
//        <p>
//          {" Known as : "}
//          {person?.gender == 1 && person?.known_for_department == "Acting"
//            ? "Actress"
//            : dept}
//        </p>
//        <div className="flex gap-2 ">
//          <span>Born : </span> <Dayjs res={person} />
//        </div>
//      </div>
//      <div className="relative h-[300px] w-[200px]">
//        <Image
//          src={
//            person.profile_path
//              ? `https://image.tmdb.org/t/p/original${person.profile_path}`
//              : "/defaultImage.jfif"
//          }
//          width={200}
//          height={300}
//          priority
//          style={{ objectFit: "cover", width: "200px", height: "300px" }}
//          alt={person.name}
//          className="rounded-sm"
//        />
//      </div>
//    </div>
//    <div className="text-sm">{person.biography.substring(0, 500)}</div>
//    <p>Known for</p>
//    <div className="scroll-x flex w-full gap-3">
//      {combinedCredit.cast.map((res) => {
//        return <Test key={res.id} results={res} />;
//      })}
//    </div>
//    <p>
//      Career as{" "}
//      {person?.gender == 1 && person?.known_for_department == "Acting"
//        ? "Actress"
//        : dept}
//    </p>
//  </div>;
