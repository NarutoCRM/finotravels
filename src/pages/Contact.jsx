function Contact() {
    return (
        <section className="section-padding">
            <div className="container-main">

                <div className="mb-12 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">
                        Contact Us
                    </p>

                    <h1 className="mt-2 text-4xl font-black text-primary-dark">
                        We're Here To Help
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Have a question about your next trip? Contact our
                        travel experts today.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    <div className="rounded-3xl bg-primary-dark p-8 text-white">

                        <h2 className="text-2xl font-black">
                            TravelFirst LLC
                        </h2>

                        <div className="mt-8 space-y-6">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                                    Phone
                                </p>

                                <a
                                    href="tel:+18557502746"
                                    className="mt-1 block text-lg font-bold"
                                >
                                    (855) 750-2746
                                </a>
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                                    Email
                                </p>

                                <a
                                    href="mailto:contact@finotravels.com"
                                    className="mt-1 block text-lg font-bold"
                                >
                                    contact@finotravels.com
                                </a>
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                                    Address
                                </p>

                                <p className="mt-1 leading-7 text-blue-100">
                                    FIVE GREENTREE CENTRE,
                                    <br />
                                    525 ROUTE 73 NORTH STE 104,
                                    <br />
                                    MARLTON, NEW JERSEY
                                    <br />
                                    08053-0805
                                </p>
                            </div>

                        </div>
                    </div>

                    <form className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">

                        <div className="grid gap-5 sm:grid-cols-2">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-primary"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-primary"
                            />

                        </div>

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="mt-5 w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-primary"
                        />

                        <textarea
                            rows="6"
                            placeholder="How can we help you?"
                            className="mt-5 w-full resize-none rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-primary"
                        />

                        <button
                            type="submit"
                            className="mt-5 w-full rounded-xl bg-primary py-4 font-bold text-white transition hover:bg-primary-dark"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;