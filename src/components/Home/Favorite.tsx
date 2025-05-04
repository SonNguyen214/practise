import Image from "next/image";
import TitleHightLight from "../TitleHightlight";

const Favorite = () => {
    const arrivals = [
        {
          imgUrl: "/img/favorite/img1.png",
          title: "Trending on instagram",
        },
        {
          imgUrl: "/img/favorite/img2.png",
          title: "All Under $40",
        },
      ];
    
      return (
        <div className="n mx-[100px]">
          <TitleHightLight title={"Young’s Favourite"} />
    
          <div className="content flex gap-12 justify-between">
            {arrivals.map((el, index) => (
              <div key={index} className="item flex flex-col gap-7 cursor-pointer  w-1/2">
                <Image
                  loading="lazy"
                  width={484}
                  height={704}
                  src={el.imgUrl}
                  alt=""
                  className="rounded-[20px] overflow-hidden w-full"
                />
                <div className="des relative h-fit">
                  <div className="name text-[32px]">{el.title}</div>
                  <span className="text-2xl text-[#7F7F7F] mt-2">Explore now!</span>
    
                  <Image src={'/img/arrow-right.png'} alt="" width={32} height={10} className="absolute right-0 top-1/2 -translate-y-1/2"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Favorite;
