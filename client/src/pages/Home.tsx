import Banner from "@/components/Banner";
import Hero from "./Hero";
import Cards from "./Cards";
import AboutPage from "./AboutPage";
import AwardsPage from "./AwardsPage";
import Performance from "./Performance";
import Testimonials from "./Testimonials";
import Events from "./Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Cards />
      <AboutPage />
      <AwardsPage />
      <Performance />
      <Testimonials />
      <Events />
    </>
  );
}
