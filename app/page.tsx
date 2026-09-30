import { createPageMetadata } from "@/metadata";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FlightDeals from "@/components/FlightDeals";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export const metadata = createPageMetadata(
  "Flight Options & Travel Support",
  "Explore domestic and international flight options and contact TravelFirst LLC for travel booking assistance with FinoTravels.",
  "/",
);

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
