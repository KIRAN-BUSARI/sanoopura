import Banner from "@/components/Banner";
import Hero from "./Hero";
import Cards from "./Cards";
import AboutPage from "./AboutPage";
import AwardsPage from "./AwardsPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Cards />
      <AboutPage />
      <AwardsPage />
    </>
  );
}
