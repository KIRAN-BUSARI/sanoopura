const Banner = () => {
  return (
    <div className="z-10 flex h-auto w-full place-content-center bg-secondary py-[30px] text-white">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-center text-xl sm:text-2xl">
          Bharatanatyam Classes
        </h1>
        <p className="text-pretty text-center text-xs font-light sm:text-base">
          Admissions for next academic are open till end of the JUNE 2024 <br />
          Beginners - Intermediate - Advanced
        </p>
      </div>
    </div>
  );
};

export default Banner;
