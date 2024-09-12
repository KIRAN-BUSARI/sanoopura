import facebook_logo from "@/assets/ion_logo-facebook.png";
import instagram_logo from "@/assets/ri_instagram-fill.png";
import twitter_logo from "@/assets/mdi_twitter.png";
import whatsapp_logo from "@/assets/ri_whatsapp-fill.png";
import gmail_logo from "@/assets/basil_gmail-solid.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[252px] bg-secondary text-white mt-40 px-[120px]">
      <div className="flex justify-between items-center h-full">
        <div className="flex space-x-5">
          <Link to={"/"}>
            <img src={facebook_logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={instagram_logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={twitter_logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={whatsapp_logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={gmail_logo} alt="" />
          </Link>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="space-y-1">
            <h1 className="text-[36px] font-semibold">SANOOPURA NRITYALAYA</h1>
            <p className="text-[16px] font-normal">
              No 341 Sai Sparsh 2nd Floor, 8th Main Rd, JHCS Layout,
              <br />
              Uttarahalli Hobli, Bengaluru, Karnataka 560061.
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
