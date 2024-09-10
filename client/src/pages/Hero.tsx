import heroImg from "../assets/heroDancerImg.png";
export default function Hero() {
  return (
    <div className="h-auto pt-20">
      <div className="grid sm:grid-cols-12 px-4 sm:px-[60px] lg:px-[120px] gap-8">
        <div className="col-span-12 sm:col-span-7 relative overflow-hidden flex justify-center">
          <img
            src={heroImg}
            alt="dancer"
            className="w-full h-auto object-contain -ml-6 sm:-ml-14"
          />
          <div className="absolute inset-0 bg-center bg-no-repeat bg-heroImage opacity-25 hidden md:block lg:h-[80vh] sm:h-screen h-auto w-auto animate-spin-slow -z-10"></div>
        </div>
        <div className="col-span-12 sm:col-span-5 text-white flex flex-col justify-center sm:items-end items-start">
          <p className="text-2xl sm:text-[32px] leading-8 sm:leading-[44px] font-light tracking-[-1%] text-primary1 sm:mr-24">
            Journey through the <br /> beauty of movement <br /> and rhythm
            with...
          </p>
          <h1 className="text-4xl sm:text-5xl leading-[50px] sm:leading-[72px] tracking-[-3%] font-semibold bg-clip-text bg-gradient-to-tr from-[#593C2E] to-[#C54783] text-transparent">
            Dr. Archana S Rao
          </h1>
          <p className="text-xs sm:text-sm text-primary1 leading-5 sm:leading-[21px] tracking-[-3%]">
            <i>Founder Sanoopura Nrityalaya, Asst Professor In Microbiology</i>
          </p>
          <div className="mt-5">
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-secondary hover:opacity-90 shadow-lg shadow-secondary/50 text-opacity-100 font-medium rounded-full sm:mr-[100px]">
              Book for Performance & Workshops
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
