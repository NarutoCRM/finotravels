import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";
import BookingWidget from "./BookingWidget";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#075b79]">
      <div
        className="relative min-h-[50px] bg-cover bg-center sm:min-h-[520px] md:min-h-[450px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,45,65,.50),rgba(0,45,65,.50)), url('/images/hero-travel.jpg')",
        }}
      >
        <div className="container-main">
          {/* Hero Content */}
          <div className="flex min-h-[430px] flex-col items-center justify-center px-2 pb-10  text-center text-white sm:min-h-[430px] sm:pb-16 md:min-h-[500px]">
            <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Ready to Start Your Journey?
            </h1>

            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 sm:text-base sm:leading-7">
              Book your next flight with confidence. Our expert team is here to
              help you 24/7.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                href="#booking"
                className="rounded-lg bg-green px-6 py-3 text-sm font-bold text-white transition hover:bg-green/90"
              >
                Book Your Flight Now
              </a>

              <a
                href={`tel:+${appData.phoneNumber}`}
                className="rounded-lg border border-white bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                ☎ Call {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>

          {/* Booking Widget */}
          <div
            id="booking"
            className="
              relative z-20 mx-auto
              w-[calc(100%-8px)]
              max-w-[1120px]
              sm:w-[calc(100%-16px)]
              md:absolute
              md:bottom-[-5px]
              md:left-1/2
              md:w-[calc(100%-24px)]
              md:-translate-x-1/2
            "
          >
            <BookingWidget />
          </div>
        </div>
      </div>

      {/* Space below booking widget */}
      <div className="hidden h-[100px] md:block" />
      <div className="h-6 md:hidden" />
    </section>
  );
}

export default Hero;
