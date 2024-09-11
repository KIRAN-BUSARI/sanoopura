const Banner = () => {
  return (
    <div className="w-full h-auto bg-secondary flex place-content-center text-white py-[30px] z-10">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="sm:text-2xl text-xl text-center">
          Bharatanatyam Classes
        </h1>
        <p className="sm:text-base text-xs font-light text-center text-pretty">
          Admissions for next academic are open till end of the JUNE 2024 <br />
          Beginners - Intermediate - Advanced
        </p>
      </div>
    </div>
  );
};

export default Banner;
