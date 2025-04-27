import CustomButton from "@/components/Custom/CustomButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="banner mx-[100px] h-[852px] bg-[#F4F6F5] rounded-[60px]">
        <div className="text">
          <div className="title">
            LET’S
            EXPLORE
            UNIQUE
            CLOTHES.
          </div>
          <div className="short-des">
            Live for Influential and Innovative fashion!
          </div>
          <CustomButton title={'Shop now'} />
        </div>

        <Image src={'/img/img-banner.png'} width={100} height={200} alt=""/>
      </div>
    </div>
  );
}
