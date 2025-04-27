import CustomButton from "@/components/Custom/CustomButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="banner mx-[100px] h-[852px] bg-[#F4F6F5] rounded-[60px] relative overflow-hidden flex justify-between px-[70px] pt-[70px]">
        <div className="text flex flex-col gap-10">
          <div className="title w-[220px] text-[96px] font-bold leading-28">
            LET’S
            EXPLORE
            UNIQUE
            CLOTHES.
          </div>
          <div className="short-des text-[32px]">
            Live for Influential and Innovative fashion!
          </div>
          <CustomButton title={'Shop now'} />
        </div>

        <Image src={'/img/img-banner.png'} width={771} height={684} alt="" className="z-10"/>
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute top-[10%] right-[15%]"/>
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute bottom-[10%] right-[10%]"/>
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute bottom-[10%] right-[55%]"/>
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute top-[10%] right-[50%]"/>
      </div>
    </div>
  );
}
