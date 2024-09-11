import { motion } from "framer-motion";
import Card from "@/components/Card";
import cardImg from "@/assets/CardImg.png";

const cards: {
  id: number;
  imgLink: string;
  title: string;
  description: string;
  buttonText?: string;
}[] = [
  {
    id: 1,
    imgLink: cardImg,
    title: "Classes",
    description:
      "Bharatanatyam is a classical Indian dance form that originated in Tamil Nadu. It features intricate footwork, hand gestures, and facial expressions to tell stories from Hindu mythology and showcase Indian culture.",
    buttonText: "Classes",
  },
  {
    id: 2,
    imgLink: cardImg,
    title: "Workshops",
    description:
      "Indian contemporary dance blends classical Indian and Western styles, emphasizing expressiveness and cultural diversity. It showcases unique performances using a variety of techniques and themes, reflecting India's rich heritage.",
    buttonText: "Workshops",
  },
  {
    id: 3,
    imgLink: cardImg,
    title: "Performances",
    description:
      "Hindustani vocal is a traditional form of Indian classical music that originated in the northern regions of the Indian subcontinent. It involves patterns and is characterized by its improvisational nature and use of vocal ornamentation.",
    buttonText: "Performances",
  },
];

const Cards = () => {
  return (
    <div className="h-auto py-20 grid sm:grid-flow-col gap-10 sm:px-[120px] px-4 place-content-center">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.id * 0.2 }}
        >
          <Card
            imgLink={card.imgLink}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
