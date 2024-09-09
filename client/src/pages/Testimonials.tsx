import img1 from "@/assets/Frame 84.png";
import img2 from "@/assets/Frame 85.png";

function Testimonials() {
  return (
    <section className="h-auto pt-20">
      <div className="text-center flex flex-col space-y-5">
        <h1 className="text-4xl font-semibold">What they have to say</h1>
        <p className="text-[16px] font-normal leading-6">
          Honors for notable accomplishments, recognition of excellence in a
          field, and milestones in personal or professional growth.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-20 mt-16 h-[557px] mx-20">
        <div className="bg-[#FBF8FB] rounded-[16px] p-[32px]">
          <div className="flex space-x-12">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold text-[24px]">Dr Rekha</h2>
              <p className="text-[14px] font-normal">
                Principal Scientist, Division of Fruit crops,
                <br />
                ICAR, Hessaraghatta, Bangalore 560 089
              </p>
            </div>
          </div>

          <div className="space-y-8 font-normal text-[16px] mt-8">
            <p>
              I met Archana S Rao as a research associate. She attracted me with
              her expressive, sparkling eyes. As we started talking to each
              other I could understand that she is more than a researcher, a
              dancer with a knowledge of music! She is a good blend of “Science
              and Art”.
            </p>

            <p>
              She is very passionate about dance. In spite of busy work schedule
              she did her PhD in Biotechnology and Master’s program in Dance,
              which is her first choice. While dancing, she captures the
              audience with her sharp, crisp movements, expression and style.
              She is very innovative in her dancing abilities and expertise in
              different types of dances like Bharathanatyam, folk etc. I
              appreciate and wish a great success in her life.
            </p>
          </div>
        </div>

        <div className="bg-[#FBF8FB] rounded-[16px] p-[32px]">
          <div className="flex space-x-12">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold text-[24px]">Dr Girija Ganesan</h2>
              <p className="text-[14px] font-normal">
                Principal Scientist ( Retired) <br />
                ICAR (Indian Institute of Horticultural Research) <br />
                Hesaraghatta lake post, Bangalore
              </p>
            </div>
          </div>

          <div className="space-y-8 font-normal text-[16px] mt-8">
            <p>
              Dr Archana S Rao is a passionate dancer. She obtained her masters
              degree in dance from Sastra university. Archana is a versatile
              dancer, good in Bharathanatyam and contemporary dance forms. She
              is equally passionate in science, and waiting for her doctoral
              degree award. She is very good in imparting training in her field
              of science and dance and can mould any individual into a good
              dancer and as well a good laboratory personal assistant.
            </p>

            <p>
              I wish, her enthuse in dance never fades. She is capable of
              inventing new forms of dances and can contribute a lot to the
              field of dance. I wish her all the success in her new endeavor of
              starting a dance school to impart her dance knowledge to many
              youngsters.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#744E6C] h-[245px] text-white mt-[120px]">
        <div className="flex flex-col justify-center items-center h-full w-[920px] mx-auto space-y-4">
          <p className="text-[16px] font-normal leading-[26px]">
            Today I am a dancer largely because of the encouragement and support
            of Doddamma (K V Jamuna) and in my pursuit of dance, many have
            guided me and many more have stood by me. Especially my Gurus have
            filled life to my dreams of becoming a Bharathanatyam dancer. I owe
            each one of them my heartfelt Pranams and gratitude.
          </p>

          <h1 className="text-[24px] font-semibold">- Dr Archana S Rao</h1>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
