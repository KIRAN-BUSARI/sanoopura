import Hero from './Hero';
import Cards from './Cards';
import AboutPage from './AboutPage';
import AwardsPage from './AwardsPage';
import Performance from './Performance';
import Testimonials from './Testimonials';
import Events from './Events';
import EventBanner from '@/components/EventBanner';
import Gallery from './Gallery';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import TestimonalBanner from '@/components/TestimonalBanner';

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
      <TestimonalBanner />
      <Events />
      <EventBanner />
      <Gallery />
      <Footer />
    </>
  );
}
