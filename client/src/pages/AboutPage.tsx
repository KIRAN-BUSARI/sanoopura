import { motion } from "framer-motion";
import abtPageImg from "@/assets/abtPageImg.png";
import v1 from "@/assets/v1.png";
import v2 from "@/assets/v2bottom.png";
import v3 from "@/assets/v3.png";
import v4 from "@/assets/v4.png";
import v5 from "@/assets/v5.png";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#F6F3F6] px-4 md:px-[120px] flex flex-col justify-center items-center relative"
    >
      <motion.img
        src={v3}
        alt="vector3"
        className="absolute top-0 right-10 md:right-60 w-20 md:w-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src={v5}
        alt="vector5"
        className="absolute top-0 left-10 md:left-60 w-20 md:w-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative w-full">
        <motion.img
          src={v1}
          alt="v1"
          className="absolute z-10 left-0 -top-[90px] overflow-hidden w-20 md:w-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="flex justify-center items-start flex-col px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          className="flex justify-center items-center px-4 md:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={abtPageImg} alt="abtpageimage" className="w-full h-auto" />
        </motion.div>
      </div>
      <motion.img
        src={v2}
        alt="v2"
        className="absolute bottom-0 overflow-hidden left-10 md:left-56 w-20 md:w-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.img
        src={v4}
        alt="vector4"
        className="absolute bottom-0 right-0 w-20 md:w-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};

export default AboutPage;
