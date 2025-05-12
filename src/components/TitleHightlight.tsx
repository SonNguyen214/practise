import Image from "next/image";

interface IProps {
  title: string;
}

const TitleHightLight = ({ title }: IProps) => {
  return (
    <div className="title relative w-fit text-5xl font-bold h-[50px] mb-[118px]">
      <span className="z-10 relative">{title}</span>
      <Image
        loading="lazy"
        src={"/img/hightlight-title.png"}
        width={192}
        height={34}
        alt=""
        className="absolute right-0 bottom-[-10px] z-0"
      />
    </div>
  );
};

export default TitleHightLight;
