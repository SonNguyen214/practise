import BannerPartner from "@/components/BannerPartner";
import CustomButton from "@/components/Custom/CustomButton";
import Arrivals from "@/components/Home/Arrivals";
import BannerHome from "@/components/Home/Banner";
import Favorite from "@/components/Home/Favorite";
import TitleHightLight from "@/components/TitleHightlight";

export default function Home() {
  return (
    <div className="home flex gap-20 flex-col">
      <BannerHome/>

      <BannerPartner />

      <Arrivals/>

      <BannerHome isBannerSale/>

      <Favorite/>
    </div>
  );
}
