import { motion } from "framer-motion";
import AwardCard from "@/components/Cards/AwardCard";

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
    <div
      id="awards"
      className="min-h-screen flex bg-secondary justify-center items-center flex-col px-4 md:px-[120px] py-10"
    >
      {/* Title and description animation */}
      <motion.div
        className="flex flex-col text-white text-center mx-auto space-y-2 mb-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-left sm:text-center">
          Awards & Achievements
        </h1>
        <p className="text-sm md:text-base font-normal leading-[22px] text-left sm:text-center">
          Discover the remarkable achievements and recognition of our Indian
          classical dance artists, who have received prestigious{" "}
          <br className="hidden md:block" /> awards and accolades for their
          exceptional talent and contribution to this art form
        </p>
      </motion.div>

      {/* Awards grid with motion */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mt-10 w-full"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {awards.map((award) => (
          <motion.div
            key={award.id}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AwardCard title={award.title} description={award.description} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AwardsPage;
