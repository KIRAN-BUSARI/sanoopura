import Hero from "./Hero";
import Cards from "./Cards";
import AboutPage from "./AboutPage";
import AwardsPage from "./AwardsPage";
import Performance from "./Performance";
import Testimonials from "./Testimonials";
import Events from "./Events";
import EventBanner from "@/components/EventBanner";
import Gallery from "./Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <AboutPage />
      <AwardsPage />
      <Performance />
      <Testimonials />
      <Events />
      <EventBanner />
      <Gallery />
      <Footer />
    </>
  );
}
