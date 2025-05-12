import Image from "next/image";
import CustomButton from "../Custom/CustomButton";

interface IProps {
  isBannerSale?: boolean;
}

const BannerHome = ({ isBannerSale }: IProps) => {
  return (
    <div
      className={`banner mx-[100px] h-[852px] bg-[#F4F6F5] rounded-[60px] relative overflow-hidden flex justify-between px-[70px] pt-[70px] ${
        isBannerSale && "!bg-[#EBD96B] !mx-0 !rounded-none !p-0"
      }`}
    >
      {!isBannerSale ? (
        <div className="text flex flex-col gap-10">
          <div className="title w-[220px] text-[96px] font-bold leading-28">
            LET’S EXPLORE UNIQUE CLOTHES.
          </div>
          <div className="short-des text-[32px]">
            Live for Influential and Innovative fashion!
          </div>
          <CustomButton title={"Shop now"} className="!w-[160px]" />
        </div>
      ) : (
        <Image
          src={"/img/banner-sale.png"}
          alt=""
          width={991}
          height={852}
          className="w-1/2 h-full"
        />
      )}

      {!isBannerSale ? (
        <Image
          loading="lazy"
          src={"/img/img-banner.png"}
          width={771}
          height={684}
          alt=""
          className="z-10"
        />
      ) : (
        <div className="w-1/2 pl-[67px] pb-[155px] pt-[128px] pr-[199px] flex flex-col gap-[40px]">
          <div className="text-[112px] font-bold leading-28">
            PAYDAY SALE NOW
          </div>
          <div className="text-4xl">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </div>
          <div className="text-4xl">
            <div className="font-semibold">1 June - 10 June 2021</div>
            <div>*Terms & Conditions apply</div>
          </div>
          <CustomButton title={"Shop now"} className="!w-[160px]" />
        </div>
      )}
      <Image
        loading="lazy"
        src={"/img/star.png"}
        width={56}
        height={56}
        alt=""
        className="absolute top-[10%] right-[15%]"
      />
      <Image
        loading="lazy"
        src={"/img/star.png"}
        width={56}
        height={56}
        alt=""
        className="absolute bottom-[10%] right-[10%]"
      />
      <Image
        loading="lazy"
        src={"/img/star.png"}
        width={56}
        height={56}
        alt=""
        className="absolute bottom-[10%] right-[55%]"
      />
      <Image
        loading="lazy"
        src={"/img/star.png"}
        width={56}
        height={56}
        alt=""
        className="absolute top-[10%] right-[50%]"
      />
    </div>
  );
};

export default BannerHome;
