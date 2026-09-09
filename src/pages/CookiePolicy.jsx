function CookiePolicy() {
  const List = ({ items }) => (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-600">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const Section = ({ number, title, children }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-dark">
        {number}. {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark py-16 text-white">
        <div className="container-main">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FinoTravels
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Cookie Policy
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Learn how FinoTravels uses cookies and related technologies to
            support website functionality and improve your browsing experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-10 rounded-2xl border border-light-blue bg-light-blue/40 p-6 md:p-8">
              <p className="text-sm leading-7 text-gray-700 md:text-base">
                At FinoTravels, operated by TravelFirst LLC (“FinoTravels,”
                “we,” “us,” or “our”), we use cookies and related technologies
                to help our website function properly, understand how visitors
                interact with our platform, and improve the overall browsing
                experience.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                This Cookie Policy explains what cookies are, the types of
                cookies that may be used on FinoTravels, why they are used, and
                the choices available to you regarding these technologies.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                This policy should be considered together with our Privacy
                Policy, which provides additional information about how we
                collect and handle personal information.
              </p>
            </div>

            {/* 1 */}
            <Section number="1" title="Understanding Cookies">
              <p className="mt-4 text-gray-600">
                Cookies are small data files that websites may place on your
                computer, smartphone, tablet, or other internet-connected
                device when you visit a website.
              </p>

              <p className="mt-4 text-gray-600">
                They allow a website to recognize a particular browser or
                device and can help remember information about your visit.
              </p>

              <p className="mt-4 text-gray-600">
                Depending on how they are configured, cookies may collect or
                store information relating to:
              </p>

              <List
                items={[
                  "Website preferences",
                  "Browsing activity",
                  "Pages and features accessed",
                  "Session information",
                  "Browser and device characteristics",
                  "Interactions with website content",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Cookies can help us maintain functionality, improve website
                performance, enhance security, and make certain parts of the
                website more convenient to use.
              </p>
            </Section>

            {/* 2 */}
            <Section number="2" title="Cookies Used by FinoTravels">
              <p className="mt-4 text-gray-600">
                Cookies may be placed by FinoTravels itself or by independent
                third-party providers.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                First-Party Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                These cookies are established by FinoTravels and may be
                necessary to support the operation of our website.
              </p>

              <p className="mt-4 text-gray-600">They may assist with:</p>

              <List
                items={[
                  "Website functionality",
                  "Navigation and user interactions",
                  "Remembering selected preferences",
                  "Supporting forms and travel-related features",
                  "Maintaining website security",
                ]}
              />

              <h3 className="mt-7 text-xl font-bold text-dark">
                Third-Party Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Some cookies may be placed by external companies that provide
                services to us.
              </p>

              <p className="mt-4 text-gray-600">
                These providers may include analytics companies, advertising
                partners, technology providers, or other service partners.
              </p>

              <p className="mt-4 text-gray-600">
                Third-party cookies may help us:
              </p>

              <List
                items={[
                  "Measure website traffic",
                  "Understand visitor behavior",
                  "Evaluate website performance",
                  "Improve website functionality",
                  "Measure promotional campaigns",
                  "Deliver or measure relevant advertising",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Third-party cookies are subject to the practices and policies of
                the organizations that place them.
              </p>
            </Section>

            {/* 3 */}
            <Section number="3" title="Temporary and Long-Term Cookies">
              <p className="mt-4 text-gray-600">
                Cookies can also differ based on how long they remain on your
                device.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Session Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Session cookies are temporary. They generally remain active
                while you are browsing our website and are removed when the
                browsing session ends or the browser is closed.
              </p>

              <p className="mt-4 text-gray-600">
                They may be used to support:
              </p>

              <List
                items={[
                  "Navigation between website pages",
                  "Temporary session information",
                  "Essential website functionality",
                  "Certain security features",
                ]}
              />

              <h3 className="mt-7 text-xl font-bold text-dark">
                Persistent Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Persistent cookies remain on your device for a defined period
                or until they are removed manually.
              </p>

              <p className="mt-4 text-gray-600">They may help us:</p>

              <List
                items={[
                  "Recognize returning visitors",
                  "Remember selected preferences",
                  "Understand recurring website activity",
                  "Improve convenience during future visits",
                ]}
              />

              <p className="mt-4 text-gray-600">
                The length of time a persistent cookie remains active may vary
                depending on its purpose and configuration.
              </p>
            </Section>

            {/* 4 */}
            <Section number="4" title="Main Cookie Categories">
              <p className="mt-4 text-gray-600">
                Different cookies may serve different purposes.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Necessary Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                These cookies support essential website operations and may be
                required for certain features to function correctly.
              </p>

              <p className="mt-4 text-gray-600">They can assist with:</p>

              <List
                items={[
                  "Website stability",
                  "Secure interactions",
                  "Forms and related functions",
                  "Basic navigation",
                  "Essential website operations",
                ]}
              />

              <p className="mt-4 text-gray-600">
                Because these cookies may be necessary for the website to
                operate, disabling them could affect certain features.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Functional and Performance Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Functional cookies may allow the website to remember certain
                preferences, while performance cookies help us understand how
                visitors interact with the platform.
              </p>

              <p className="mt-4 text-gray-600">
                The information collected may relate to:
              </p>

              <List
                items={[
                  "Frequently visited pages",
                  "Website traffic",
                  "Time spent on pages",
                  "Technical errors",
                  "General website interactions",
                  "User-selected preferences",
                ]}
              />

              <p className="mt-4 text-gray-600">
                This information helps us identify areas where the website can
                be improved.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Analytics Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Analytics technologies allow us to better understand visitor
                activity and website usage.
              </p>

              <p className="mt-4 text-gray-600">They may help us evaluate:</p>

              <List
                items={[
                  "How visitors navigate the site",
                  "Which pages receive the most interaction",
                  "Website performance",
                  "General usage trends",
                  "Areas that may require improvement",
                ]}
              />

              <h3 className="mt-7 text-xl font-bold text-dark">
                Advertising Cookies
              </h3>

              <p className="mt-4 text-gray-600">
                Advertising-related cookies may be used by FinoTravels or
                advertising partners to support promotional activities.
              </p>

              <p className="mt-4 text-gray-600">They may help with:</p>

              <List
                items={[
                  "Measuring advertising campaigns",
                  "Understanding interactions with advertisements",
                  "Delivering potentially relevant promotions",
                  "Limiting repetitive advertisements",
                  "Evaluating advertising effectiveness",
                ]}
              />

              <h3 className="mt-7 text-xl font-bold text-dark">
                Social and Sharing Technologies
              </h3>

              <p className="mt-4 text-gray-600">
                Certain website features may rely on technologies provided by
                social media or other external platforms.
              </p>

              <p className="mt-4 text-gray-600">
                These technologies may support functions such as content
                sharing or interaction with third-party platforms.
              </p>

              <p className="mt-4 text-gray-600">
                Their use is governed by the privacy and cookie practices of
                the applicable third-party provider.
              </p>
            </Section>

            {/* 5 */}
            <Section number="5" title="Why FinoTravels Uses Cookies">
              <p className="mt-4 text-gray-600">
                Cookies and similar technologies may be used for several
                purposes, including:
              </p>

              <List
                items={[
                  "Keeping the website operational",
                  "Improving navigation and usability",
                  "Remembering certain settings",
                  "Monitoring website performance",
                  "Understanding visitor activity",
                  "Supporting security measures",
                  "Identifying potential fraudulent behavior",
                  "Measuring promotional activity",
                  "Improving travel-related content and website features",
                ]}
              />
            </Section>

            {/* 6 */}
            <Section number="6" title="Your Cookie Choices">
              <p className="mt-4 text-gray-600">
                You have several ways to manage cookies.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Browser Controls
              </h3>

              <p className="mt-4 text-gray-600">
                Most internet browsers provide settings that allow you to
                control cookies. Depending on your browser, you may be able to:
              </p>

              <List
                items={[
                  "Remove existing cookies",
                  "Block selected cookies",
                  "Block all cookies",
                  "Allow cookies only from certain websites",
                  "Receive notifications when cookies are being stored",
                ]}
              />

              <p className="mt-4 text-gray-600">
                The exact controls vary between browsers and devices.
              </p>

              <h3 className="mt-7 text-xl font-bold text-dark">
                Advertising Choices
              </h3>

              <p className="mt-4 text-gray-600">
                Depending on the advertising technologies used, you may also be
                able to control personalized advertising through third-party
                advertising platforms or device settings.
              </p>

              <p className="mt-4 text-gray-600">
                Choosing to opt out of personalized advertising does not
                necessarily remove advertisements altogether. Instead,
                advertisements may become less tailored to your interests.
              </p>
            </Section>

            {/* 7 */}
            <Section
              number="7"
              title="Information Shared Through Cookie Technologies"
            >
              <p className="mt-4 text-gray-600">
                In some circumstances, limited information collected through
                cookies may be made available to trusted third-party providers
                that help us operate and improve our website.
              </p>

              <p className="mt-4 text-gray-600">
                These parties may support activities such as:
              </p>

              <List
                items={[
                  "Website analytics",
                  "Technical performance monitoring",
                  "Advertising measurement",
                  "Marketing analysis",
                  "Security and fraud prevention",
                  "Website optimization",
                ]}
              />

              <p className="mt-4 text-gray-600">
                The information shared depends on the technology and service
                involved. Third-party providers may have their own privacy
                policies and obligations concerning the information they
                process.
              </p>
            </Section>

            {/* 8 */}
            <Section number="8" title="Third-Party Tracking Technologies">
              <p className="mt-4 text-gray-600">
                Some services integrated into our website may use their own
                cookies, pixels, tags, or similar technologies.
              </p>

              <p className="mt-4 text-gray-600">
                Because these technologies are controlled by independent
                providers, their operation may change according to their
                respective products, policies, or technical practices.
              </p>

              <p className="mt-4 text-gray-600">
                We recommend reviewing the privacy and cookie information
                provided by third-party services if you want to understand how
                they process information collected through their technologies.
              </p>
            </Section>

            {/* 9 */}
            <Section number="9" title="Changes to This Cookie Policy">
              <p className="mt-4 text-gray-600">
                TravelFirst LLC may revise this Cookie Policy when our website,
                technology, business practices, or applicable legal
                requirements change.
              </p>

              <p className="mt-4 text-gray-600">
                When modifications are made, the updated version will be
                published on this page together with the revised effective date.
              </p>

              <p className="mt-4 text-gray-600">
                We encourage visitors to check this policy periodically so they
                remain aware of how cookies and related technologies may be used
                on FinoTravels.
              </p>
            </Section>

            {/* 10 Contact */}
            <section className="rounded-2xl bg-dark p-7 text-white md:p-9">
              <h2 className="text-2xl font-bold">10. Contact Us</h2>

              <p className="mt-4 leading-7 text-white/80">
                If you have questions about this Cookie Policy, our use of
                cookies, or your available privacy choices, please contact us:
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold text-primary">Address</p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104 MARLTON,
                    NEW JERSEY 08053-0805
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Email</p>
                  <a
                    href="mailto:contact@finotravels.com"
                    className="mt-1 inline-block text-sm text-white/80 transition hover:text-white"
                  >
                    contact@finotravels.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">Phone</p>
                  <a
                    href="tel:+18557502746"
                    className="mt-1 inline-block text-sm font-semibold text-white transition hover:text-primary"
                  >
                    ☎ (855) 750-2746
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookiePolicy;