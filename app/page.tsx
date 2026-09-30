import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FlightDeals from "@/components/FlightDeals";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FlightDeals />
      <AboutSection />
      <FAQ />
      <Reviews />
      <CTA />
    </>
  );
}
