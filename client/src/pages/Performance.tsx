function Performance() {
  return (
    <section className="h-screen pt-20">
      <div className=" flex flex-col justify-center items-center">
        <div className="text-center flex flex-col space-y-5">
          <h1 className="text-4xl font-semibold">Performance</h1>
          <p className="text-[16px] font-normal leading-6">
            Exploring the grace, rhythm, and storytelling traditions of Indian
            classical dance through <br /> captivating movements, intricate
            footwork, and emotive expressions.
          </p>
        </div>

        <div className="md:w-[1000px] md:h-[624px] w-[500px] h-[350px] mt-10 rounded-lg overflow-hidden">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fzxBxAoPJZY?si=J4Ll0Wxr6GzFSvdg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/S-R2pPYl-UM?si=mLCkcpW1njfkNwNu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Performance;
