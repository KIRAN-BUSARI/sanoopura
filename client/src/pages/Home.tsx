import Banner from "@/components/Banner";
import Hero from "./Hero";
import Cards from "./Cards";
import AboutPage from "./AboutPage";
import AwardsPage from "./AwardsPage";
import Performance from "./Performance";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Cards />
      <AboutPage />
      <AwardsPage />
      <Performance />
    </>
  );
}
