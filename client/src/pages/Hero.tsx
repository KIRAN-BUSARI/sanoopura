import { motion } from 'framer-motion';
import heroImg from '../assets/heroDancerImg.png';

export default function Hero() {
  return (
    <div className="h-auto py-10 sm:py-0 sm:pt-20">
      <div className="grid gap-8 sm:grid-cols-12 sm:px-[120px]">
        <motion.div
          className="relative col-span-12 flex justify-center overflow-hidden sm:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="dancer"
            className="-ml-7 h-auto w-full object-contain sm:-ml-14"
          />
          <div className="absolute inset-0 -z-10 mt-5 w-full animate-spin-slow bg-heroImage bg-contain bg-center bg-no-repeat opacity-5 sm:mt-0 sm:h-[50vh] lg:h-[80vh]"></div>
          <div className="gradient absolute -inset-x-64 bottom-0 block bg-gradient-to-t from-white/100 pt-[30%] sm:hidden" />
        </motion.div>

        <motion.div
          className="col-span-12 flex flex-col justify-center text-white sm:col-span-5 sm:items-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-balance text-center text-xl font-medium leading-8 tracking-[-1%] text-primary1 sm:mr-24 sm:text-start sm:text-[32px] sm:font-normal sm:leading-[44px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Journey through the <br className="hidden sm:block" /> beauty of
            movement <br className="hidden sm:block" /> and rhythm with...
          </motion.p>

          <motion.h1
            className="bg-gradient-to-tr from-[#593C2E] to-[#C54783] bg-clip-text text-center text-4xl font-semibold leading-[50px] tracking-[-3%] text-transparent sm:text-start sm:text-5xl sm:leading-[72px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dr. Archana S Rao
          </motion.h1>

          <motion.p
            className="text-center text-xs leading-5 tracking-[-3%] text-primary1 sm:text-start sm:text-sm sm:leading-[21px]"
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
              className="rounded-full bg-secondary px-8 py-2 font-medium text-opacity-100 shadow-lg shadow-secondary/50 hover:opacity-90 sm:mr-[100px] sm:px-6 sm:py-3"
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
