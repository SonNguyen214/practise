"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const BannerPartner = () => {
  const data = [
    "/img/partner/amazon.png",
    "/img/partner/h-m.png",
    "/img/partner/lacoste.png",
    "/img/partner/levis.png",
    "/img/partner/obey.png",
    "/img/partner/shopify.png",
  ];

  return (
    <div className="banner-partner transition-all duration-500 pb-5 bg-[#EBD96B]">
      <Marquee autoFill>
        <div className="list-image">
          {data.map((link, index) => (
            <div className="logo-partner" key={index}>
              <Image
                layout="fill"
                alt="partner"
                src={link}
                sizes="(max-width: 600px) 100vw, 100px"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BannerPartner;