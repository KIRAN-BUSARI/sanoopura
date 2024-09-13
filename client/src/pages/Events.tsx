import { motion } from "framer-motion";
import eventImg from "@/assets/EventPageImage.png";
import EventCard from "@/components/Cards/EventCard";

const events = [
  {
    id: 1,
    color: "#937DC2",
    title: "Guruvayur Temple",
    description:
      "Bharathanatyam Performance at Guruvayur Temple on 04.08.2018 10.30 AM to 12.00",
  },
  {
    id: 2,
    color: "#7B2869",
    title: "Shankara Jayanthi celebrations",
    description:
      "Bharathanatyam Performance at Guruvayur Temple on 04.08.2018 10.30 AM to 12.00",
  },
  {
    id: 3,
    color: "#C689C6",
    title: "Tata Institute of Fundamental Research",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 4,
    color: "#9D3C72",
    title: "Padma Bhushan Mrinalini Sarabhai",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 5,
    color: "#E8A0BF",
    title: "Shri Krishna Temple",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 6,
    color: "#C85C8E",
    // eslint-disable-next-line quotes
    title: 'Kathak at "Soma"',
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 7,
    color: "#FCC5C0",
    title: "Chandana TV Award Function",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 8,
    color: "#FFBABA",
    title: "Srushti Dance Festival",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 9,
    color: "#628E90",
    title: "National Institute of Tuberculosis",
    description: "MFA In dance, Ph.D In Microbiology",
  },
  {
    id: 10,
    color: "#7895B2",
    title: "National Institute of Tuberculosis",
    description: "MFA In dance, Ph.D In Microbiology",
  },
];

const Events = () => {
  return (
    <div
      id="events"
      className="h-auto items-center flex-col relative px-4 md:px-[60px] lg:px-[120px] py-10"
    >
      <img
        src={eventImg}
        alt="eventImage"
        className="absolute right-0 -z-10 opacity-45 md:opacity-100 top-[550px] md:top-32 w-[300px]"
      />

      <motion.div
        className="flex flex-col text-primary text-center mx-auto space-y-2 mb-10 md:mb-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold">Events</h1>
        <p className="text-sm md:text-base font-normal leading-[22px]">
          Discover the remarkable achievements and recognition of our Indian
          classical dance artists, who have received prestigious <br /> awards
          and accolades for their exceptional talent and contribution to this
          art form.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <EventCard
              color={event.color}
              title={event.title}
              description={event.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
