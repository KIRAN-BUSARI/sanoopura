import facebook_logo from "@/assets/ion_logo-facebook.png";
import instagram_logo from "@/assets/ri_instagram-fill.png";
import twitter_logo from "@/assets/mdi_twitter.png";
import whatsapp_logo from "@/assets/ri_whatsapp-fill.png";
import gmail_logo from "@/assets/basil_gmail-solid.png";
import { Link } from "react-router-dom";

const socialLinks: { id: number; icon: string; link: string }[] = [
  {
    id: 1,
    icon: facebook_logo,
    link: "/",
  },
  {
    id: 2,
    icon: instagram_logo,
    link: "/",
  },
  {
    id: 3,
    icon: twitter_logo,
    link: "/",
  },
  {
    id: 4,
    icon: whatsapp_logo,
    link: "/",
  },
  {
    id: 5,
    icon: gmail_logo,
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-[320px] bg-secondary text-white mt-20 md:mt-40 px-4 md:px-[120px]">
      <div className="flex md:justify-between md:items-center md:h-full flex-col-reverse md:flex-row">
        <div className="flex space-x-5 pt-5 md:pt-0">
          {socialLinks.map((link) => (
            <Link to={link.link} key={link.id}>
              <img src={link.icon} alt={link.icon} />
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-8 pt-8 md:pt-0">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-[36px] font-semibold">
              SANOOPURA NRITYALAYA
            </h1>
            <p className="text-sm md:text-base font-normal">
              No 341 Sai Sparsh 2nd Floor, 8th Main Rd,
              <br className="md:hidden" /> JHCS Layout,
              <br className="hidden md:block" />
              Uttarahalli Hobli, Bengaluru,
              <br className="md:hidden" /> Karnataka 560061.
            </p>
          </div>

          <h3 className="text-[24px] font-semibold">
            Contact: + 91-9611494919
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
