import { motion } from "framer-motion";
import heroImg from "../assets/heroDancerImg.png";

export default function Hero() {
  return (
    <div className="h-auto sm:pt-20 py-10 sm:py-0">
      <div className="grid sm:grid-cols-12 sm:px-[120px] gap-8">
        <motion.div
          className="col-span-12 sm:col-span-7 relative overflow-hidden flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="dancer"
            className="w-full h-auto object-contain -ml-7 sm:-ml-14"
          />
          <div className="absolute inset-0 bg-center bg-contain bg-no-repeat bg-heroImage mt-5 sm:mt-0 opacity-5 sm:h-[50vh] lg:h-[80vh] w-full animate-spin-slow -z-10"></div>
        </motion.div>

        <motion.div
          className="col-span-12 sm:col-span-5 text-white flex flex-col justify-center sm:items-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-xl sm:text-[32px] leading-8 sm:leading-[44px] font-light tracking-[-1%] text-primary1 text-center sm:text-start sm:mr-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Journey through the <br className="hidden sm:block" /> beauty of
            movement <br className="hidden sm:block" /> and rhythm with...
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl leading-[50px] sm:leading-[72px] tracking-[-3%] font-semibold bg-clip-text bg-gradient-to-tr from-[#593C2E] to-[#C54783] text-transparent text-center sm:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dr. Archana S Rao
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm text-primary1 leading-5 sm:leading-[21px] tracking-[-3%] text-center sm:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <i>Founder Sanoopura Nrityalaya, Asst Professor In Microbiology</i>
          </motion.p>

          <motion.div
            className="mt-5 flex justify-center sm:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-4 py-2 sm:px-6 sm:py-3 bg-secondary hover:opacity-90 shadow-lg shadow-secondary/50 text-opacity-100 font-medium rounded-full sm:mr-[100px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book for Performance & Workshops
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
