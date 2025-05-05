'use client'

import BannerPartner from "@/components/BannerPartner";
import CustomButton from "@/components/Custom/CustomButton";
import Arrivals from "@/components/Home/Arrivals";
import BannerHome from "@/components/Home/Banner";
import Favorite from "@/components/Home/Favorite";
import { Input, Space } from "antd";

export default function Home() {
  return (
    <div className="home flex gap-20 flex-col">
      <BannerHome />

      <BannerPartner />

      <Arrivals />

      <BannerHome isBannerSale />

      <Favorite />

      <div className="bg-[#E5C643] py-[141px] text-center text-white flex flex-col gap-9">
        <div className="text-[55px] font-bold max-w-[1010px] mx-auto">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
        <div className="text-[32px]">Type your email down below and be young wild generation</div>
        <Space.Compact style={{ maxWidth: "574px", maxHeight: '87px' }} className="w-full h-[87px] bg-white items-center rounded-[10px] p-2.5 mx-auto" >
          <Input placeholder="Add your email here"  className="!border-none !text-2xl focus:!shadow-none "/>
          <CustomButton title='SEND' className='!rounded-[8px] !w-[161px]'/>
        </Space.Compact>
      </div>
    </div>
  );
}
