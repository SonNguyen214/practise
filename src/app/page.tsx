import BannerPartner from "@/components/BannerPartner";
import CustomButton from "@/components/Custom/CustomButton";
import Image from "next/image";

const arrivals = [
  {
    imgUrl: '',
    title: '',
  },
  {
    imgUrl: '',
    title: '',
  },
  {
    imgUrl: '',
    title: '',
  },
]

export default function Home() {
  return (
    <div className="home flex gap-20 flex-col">
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

        <Image src={'/img/img-banner.png'} width={771} height={684} alt="" className="z-10" />
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute top-[10%] right-[15%]" />
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute bottom-[10%] right-[10%]" />
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute bottom-[10%] right-[55%]" />
        <Image src={'/img/star.png'} width={56} height={56} alt="" className="absolute top-[10%] right-[50%]" />
      </div>

      <BannerPartner />

      <div className="new-arrival">
        <div className="title">
          NEW ARRIVALS

          <Image src={'/img/highlight-title.png'} width={192} height={34} alt=""/>
        </div>

        <div className="content">
          {
            arrivals.map((el, index) => <div key={index} className="item">
              <Image width={484} height={704} src={el.imgUrl} alt="" />
              <div className="des">
                <div className="name">
                  {el.title}
                </div>
                <span>Explore now</span>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}
