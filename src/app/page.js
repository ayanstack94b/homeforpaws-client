import Banner from "@/components/home/Banner";
import FeaturedPets from "@/components/home/FeaturedPets";
import PetCareTips from "@/components/home/PetCareTips";
import SuccessStories from "@/components/home/SuccessStories";
import WhyAdoptPets from "@/components/home/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <FeaturedPets></FeaturedPets>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
    </div>
  );
}
