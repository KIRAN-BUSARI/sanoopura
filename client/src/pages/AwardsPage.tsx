import AwardCard from "@/components/AwardCard";

const awards = [
  {
    id: 1,
    title: "Bharath Siri",
    description:
      "National Award for Bharathantyam Ajantha Cultural Association, Bangalore, 2012 State Award.",
  },
  {
    id: 2,
    title: "Karnataka Siri",
    description:
      "National Award for Yoga Ajantha Cultural Association, Bangalore, 2012",
  },
  {
    id: 3,
    title: "Janapada Siri",
    description: "Kuvempu university - 2024",
  },
  {
    id: 4,
    title: "Abhinandana Puraskara",
    description: "Brahmana Sangha, Thirthahalli – 14-09-2003",
  },
  {
    id: 5,
    title: "Kishore Prathibhe",
    description: "Kannada & Samskruthi Ilakhe - 2001",
  },
  {
    id: 6,
    title: "Best Actress Award",
    description: "For Dance Drama vevnu visarjane",
  },
];
const AwardsPage = () => {
  return (
    <div className="h-[90vh] flex bg-[#744E6C] justify-center items-center flex-col">
      <div className="flex flex-col text-white mx-auto top-20 space-y-5">
        <h1 className="text-4xl font-semibold text-center">
          Awards & Achievements
        </h1>
        <p className="text-base font-normal text-center leading-[22px]">
          Discover the remarkable achievements and recognition of our Indian
          classical dance artists, who have received prestigious <br /> awards
          and accolades for their exceptional talent and contribution to this
          art form
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10 mx-20">
        {awards.map((award) => (
          <AwardCard
            key={award.id}
            title={award.title}
            description={award.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
