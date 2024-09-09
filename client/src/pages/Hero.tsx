import heroImg from "../assets/heroDancerImg.png";
export default function Hero() {
  return (
    // <div className="h-auto pt-20 bg-gradient-to-br from-[#26172E] via-[#34203E] to-[#3D2349]">
    <div className="h-[66.3vh] pt-20">
      <div className="grid sm:grid-cols-12 px-4 sm:px-[120px]">
        <div className="col-span-7 z-0 justify-center relative overflow-hidden">
          <img
            src={heroImg}
            alt="dancer"
            className="h-auto w-auto object-contain -ml-14"
          />
          {/* <div className="absolute -z-10 inset-0 bg-center bg-no-repeat bg-heroImage opacity-20 sm:h-[80vh] h-auto w-auto animate-spin-slow"></div> */}
        </div>
        <div className="col-span-5 text-white flex flex-col justify-center items-end">
          <p className="text-[32px] leading-[44px] font-light tracking-[-1%] text-primary1 mr-24">
            Journey through the <br /> beauty of movement <br /> and rhythm
            with...
          </p>
          <h1 className="text-5xl leading-[72px] tracking-[-3%] font-semibold bg-clip-text bg-gradient-to-tr from-[#593C2E] to-[#C54783] text-transparent">
            Dr. Archana S Rao
          </h1>
          <p className="text-sm text-primary1 leading-[21px] tracking-[-3%]">
            <i>Founder Sanoopura Nrityalaya, Asst Professor In Microbiology</i>
          </p>
          <div className="mt-5">
            <button className="px-6 py-3 bg-secondary hover:opacity-90 text-opacity-100 font-medium rounded-full mr-[100px]">
              Book for Performance & Workshops
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
