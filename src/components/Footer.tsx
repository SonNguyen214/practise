import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socials = ["/icons/fb.png", "/icons/insta.png", "/icons/twitter.png"];

  return (
    <div className="h-[545px] bg-black flex justify-between px-[100px] pt-[119px] text-white">
      <div className="flex gap-8 flex-col max-w-[415px]">
        <div className="text-[40px] font-bold">FASHION</div>
        <span className="text-[#8E8E8E] text-xl">
          Complete your style with awesome clothes from us.
        </span>
        <div className="socials flex gap-3.5">
          {socials.map((el) => (
            <Link
              key={el}
              href="#"
              className="w-[52px] cursor-pointer h-[52px] rounded-[15px] bg-[#EBD96B] flex items-center justify-center"
            >
              <Image src={el} alt="" width={20} height={20} />
            </Link>
          ))}
          <Link
            href="#"
            className="w-[52px] cursor-pointer h-[52px] rounded-[15px] bg-[#EBD96B] flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-black">In</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-[158px] text-2xl text-[#8E8E8E]">
        <div className="flex gap-8 flex-col">
          <div className="text-white">Company</div>
          <Link href="#" className="hover:underline cursor-pointer">
            About
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Contact us
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Support
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Careers
          </Link>
        </div>
        <div className="flex gap-8 flex-col">
          <div className="text-white">Quick Link</div>
          <Link href="#" className="hover:underline cursor-pointer">
            Share Location
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Orders Tracking
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Size Guide
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            FAQs
          </Link>
        </div>
        <div className="flex gap-8 flex-col">
          <Link href="#" className="text-white">
            Legal
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Terms & conditions
          </Link>
          <Link href="#" className="hover:underline cursor-pointer">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
