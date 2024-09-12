const EventBanner = () => {
  return (
    <div className="w-full h-auto bg-secondary flex place-content-center text-white py-8 md:py-[50px] z-10">
      <div className="flex flex-col justify-center items-center space-y-4 px-4 md:px-8">
        <h1 className="text-xl md:text-4xl text-center leading-[30px] md:leading-[50px]">
          Looking for Events & Performances?
        </h1>
        <p className="text-lg md:text-2xl text-center leading-[24px] md:leading-[33px] font-light">
          Talk to us: 9611494919 or write a mail - sanoopura@gmail.com
        </p>
      </div>
    </div>
  );
};

export default EventBanner;
