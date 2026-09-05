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
      <div className="min-h-screen bg-white">
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
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;