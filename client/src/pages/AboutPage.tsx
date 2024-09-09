import abtPageImg from "@/assets/abtPageImg.png";
import v1 from "@/assets/v1.png";
import v2 from "@/assets/v2bottom.png";
import v3 from "@/assets/v3.png";
import v4 from "@/assets/v4.png";
import v5 from "@/assets/v5.png";
const AboutPage = () => {
  return (
    <div className="h-screen bg-[#F6F3F6] flex justify-center items-center relative">
      <img src={v3} alt="vector3" className="absolute top-0 right-60" />
      <img src={v5} alt="vector5" className="absolute top-0 left-60" />
      <div className="grid grid-cols-2 gap-20 px-20 relative">
        <img
          src={v1}
          alt="v1"
          className="absolute z-10 left-0 -top-[90px] overflow-hidden"
        />
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-[36px] font-semibold mb-10">About Me</h1>
          <div className="text-[#25272D] mb-5 leading-[30px]">
            <p className="text-xl font-semibold">
              Dr Archana S Rao <br />
              <span className="text-[14px] font-medium text-[#744E6C]">
                MFA In dance, Ph.D In Microbiology
              </span>
            </p>
          </div>
          <div className="text-[#25272D] font-normal text-base leading-[24px] text-left">
            <p>
              Dr Archana S Rao, a true exponent of traditional Bharathanatyam,
              has an undying passion for ancient Indian art form. With an eye on
              perfection and with an eye for every little detail of the world's
              oldest dance form, Archana through her graceful steps makes every
              performance a treat to watch! Her classical approach comes to life
              with a revelatory description of mythological legends of the act,
              peerless expressions, spectacular footwork and a great repertoire
              of gestures.
            </p>
          </div>
        </div>
        <div className="">
          <img src={abtPageImg} alt="abtpageimage" />
        </div>
      </div>
      <img
        src={v2}
        alt="v2"
        className="absolute bottom-0 overflow-hidden left-56"
      />
      <img src={v4} alt="vector4" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default AboutPage;
