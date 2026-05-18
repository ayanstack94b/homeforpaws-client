import Banner from "@/components/home/Banner";
import FeaturedPets from "@/components/home/FeaturedPets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <FeaturedPets></FeaturedPets>
    </div>
  );
}
