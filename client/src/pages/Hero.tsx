export default function Hero() {
  return (
    <div className="h-auto pt-20 bg-gradient-to-br from-[#26172E] via-[#34203E] to-[#3D2349]">
      <div className="grid sm:grid-cols-12 gap-4 px-10 sm:px-[120px] items-center">
        <div className="col-span-6 text-white flex flex-col justify-center">
          <h1 className="sm:text-5xl text-3xl leading-[150%] text-[#E2B398] font-medium">
            Dr. Archana S Rao
          </h1>
          <p className="sm:text-lg text-base text-[#E2B398]">
            Bharatha Siri, Karnataka Siri, Uttama Nruthyagarthi Kishora
            Prathibhe and Janapada Siri,
          </p>
          <div className="mt-8">
            <button className="px-6 py-2 bg-[#E2B398] hover:opacity-90 text-opacity-100 text-[#34203E] font-medium rounded-full">
              Know More
            </button>
          </div>
        </div>
        <div className="col-span-6 z-0 flex justify-center relative overflow-hidden">
          <img
            src="/src/assets/image.png"
            alt="dancer"
            className="h-auto w-auto object-contain"
          />
          <div className="absolute -z-10 inset-0 bg-center bg-no-repeat bg-heroImage opacity-20 sm:h-[80vh] h-auto w-auto animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
