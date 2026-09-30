import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";

function CarRental() {
  return (
    <section className="section-padding">
      <div className="container-main text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Car Rental
        </p>

        <h1 className="mt-2 text-4xl font-black text-primary-dark">
          Travel Around With Ease
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Make your journey easier with convenient car rental assistance for
          your trip.
        </p>

        <a
          href={`tel:+${appData.phoneNumber}`}
          className="mt-8 inline-flex rounded-xl bg-primary px-8 py-4 font-bold text-white"
        >
          ☎ Call {formatPhoneNumber(appData.phoneNumber)}
        </a>
      </div>
    </section>
  );
}

export default CarRental;
