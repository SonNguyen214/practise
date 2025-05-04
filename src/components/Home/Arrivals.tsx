import Image from "next/image";
import TitleHightLight from "../TitleHightlight";

const Arrivals = () => {
  const arrivals = [
    {
      imgUrl: "/img/arrivals/img1.png",
      title: "Hoodies & Sweetshirt",
    },
    {
      imgUrl: "/img/arrivals/img2.png",
      title: "Coats & Parkas",
    },
    {
      imgUrl: "/img/arrivals/img3.png",
      title: "Tees & T-Shirt",
    },
  ];

  return (
    <div className="new-arrival mx-[100px]">
      <TitleHightLight title={"NEW ARRIVALS"} />

      <div className="content flex gap-5 justify-between">
        {arrivals.map((el, index) => (
          <div key={index} className="item flex flex-col gap-7 cursor-pointer">
            <Image
              loading="lazy"
              width={484}
              height={704}
              src={el.imgUrl}
              alt=""
              className="rounded-[20px] overflow-hidden"
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

export default Arrivals;
