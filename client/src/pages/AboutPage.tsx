import abtPageImg from "@/assets/abtPageImg.png";
import v1 from "@/assets/v1.png";
import v2 from "@/assets/v2bottom.png";
import v3 from "@/assets/v3.png";
import v4 from "@/assets/v4.png";
import v5 from "@/assets/v5.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F3F6] px-4 md:px-[120px] flex flex-col md:flex-row justify-center items-center relative">
      <img
        src={v3}
        alt="vector3"
        className="absolute top-0 right-10 md:right-60"
      />
      <img
        src={v5}
        alt="vector5"
        className="absolute top-0 left-10 md:left-60"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">
        <img
          src={v1}
          alt="v1"
          className="absolute z-10 left-0 -top-[90px] overflow-hidden"
        />
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-[24px] md:text-[36px] font-semibold mb-5 md:mb-10">
            About Me
          </h1>
          <div className="text-primary1 mb-3 md:mb-5 leading-[24px] md:leading-[30px]">
            <p className="text-lg md:text-xl font-semibold">
              Dr Archana S Rao <br />
              <span className="text-[12px] md:text-[14px] font-medium text-secondary">
                MFA In dance, Ph.D In Microbiology
              </span>
            </p>
          </div>
          <div className="text-primary1 font-normal text-sm md:text-base leading-[20px] md:leading-[24px] text-left">
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
        <div className="flex justify-center items-center">
          <img src={abtPageImg} alt="abtpageimage" className="w-full h-auto" />
        </div>
      </div>
      <img
        src={v2}
        alt="v2"
        className="absolute bottom-0 overflow-hidden left-10 md:left-56"
      />
      <img src={v4} alt="vector4" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default AboutPage;
