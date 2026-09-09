import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import FlightDeals from "./components/FlightDeals";
import AboutSection from "./components/AboutSection";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";

import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Cruise from "./pages/Cruise";
import CarRental from "./pages/CarRental";
import Deals from "./pages/Deals";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CancellationRefund from "./pages/CancellationRefund";
import AdvertisementDisclosure from "./pages/AdvertisementDisclosure";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import DomesticFlightDeals from "./pages/DomesticFlightDeals";
import InternationalFlightDeals from "./pages/InternationalFlightDeals";
import FirstClassFlightDeals from "./pages/FirstClassFlightDeals";
import BusinessClassFlightDeals from "./pages/BusinessClassFlightDeals";
import LastMinuteFlightDeals from "./pages/LastMinuteFlightDeals";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cruise" element={<Cruise />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/advertisement-disclosure" element={<AdvertisementDisclosure />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/domestic-flight-deals" element={<DomesticFlightDeals />} />
          <Route path="/international-flight-deals" element={<InternationalFlightDeals />} />
          <Route path="/first-class-flight-deals" element={<FirstClassFlightDeals />} />
          <Route path="/business-class-flight-deals" element={<BusinessClassFlightDeals />} />
          <Route path="/last-minute-flight-deals" element={<LastMinuteFlightDeals />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;