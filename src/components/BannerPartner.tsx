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
    <div className="banner-partner">
      <Marquee autoFill>
        <div className="list-image">
          {data.map((link, index) => (
            <Image
              key={index}
              alt="partner"
              src={link}
              width={176}
              height={61}
              objectFit="contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BannerPartner;
