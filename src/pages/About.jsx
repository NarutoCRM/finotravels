import AboutSection from "../components/AboutSection";

function About() {
  return (
    <div>
      <section className="bg-primary-dark py-20 text-center">
        <div className="container-main">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            About Us
          </p>

          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            About FinoTravels
          </h1>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}

export default About;