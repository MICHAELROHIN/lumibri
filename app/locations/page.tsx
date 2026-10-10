import type { Metadata } from "next";
import Link from "next/link";
import GradientText from "../components/GradientText";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { SITE_EMAIL, gmailCompose } from "../lib/mail";

export const metadata: Metadata = {
  title: "Locations | Lumibri ABA Services",
  description:
    "Lumibri ABA Services provides in-home and community ABA therapy to children and families across Northern New Jersey.",
};

const counties = ["Bergen", "Essex", "Hudson", "Morris", "Passaic", "Union"];
const tints = [
  "bg-teal/15 text-teal",
  "bg-magenta/15 text-magenta",
  "bg-orange/20 text-orange",
  "bg-violet/15 text-violet",
  "bg-[#5bc46a]/20 text-[#3d8f4a]",
  "bg-navy/10 text-navy",
];

const heroImg =
  "https://cdn.sanity.io/images/xhxj9s9r/production/561c2dad6dcc2f5b2494c1a3187d1b09f1774c16-600x400.png?auto=format&q=80";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-violet/10 px-4 py-1.5 text-sm font-semibold text-violet">
      {children}
    </span>
  );
}

export default function LocationsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-44 lg:grid-cols-2">
            <div>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                In-Home Therapy Services Across Northern New Jersey
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
                Lumibri ABA Services proudly provides in-home services to children and families throughout Northern New Jersey.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]"
                >
                  Start Intake
                </Link>
                <a
                  href="#counties"
                  className="rounded-2xl border border-navy/15 bg-white/80 px-8 py-4 font-semibold text-navy transition hover:bg-white"
                >
                  See Counties
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImg}
                alt="Therapist providing in-home care"
                className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-navy/10 ring-8 ring-white"
              />
            </div>
          </div>
        </section>

        {/* In-home & community */}
        <section className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            In-Home &amp; Community Therapy
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Therapy is most effective when conducted in a child&rsquo;s natural, familiar surroundings. Our services are delivered directly in your home or approved community settings across Northern New Jersey.
          </p>
        </section>

        {/* Counties */}
        <section id="counties" className="bg-white py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Counties We Serve
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-muted">
                In-home and community services are available across these six Northern New Jersey counties, subject to service availability.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]"
              >
                Request In-Home Care
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {counties.map((c, i) => (
                <li key={c}>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm shadow-navy/5 ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/10 sm:p-6"
                  >
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tints[i]}`}>
                      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                        <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-bold leading-tight text-navy">{c}</span>
                      <span className="mt-0.5 block text-muted">County</span>
                    </span>
                    <span aria-hidden className="text-xl text-violet transition group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="hero-bg px-6 py-28 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-navy"> Get In Touch <GradientText animationSpeed={4}> With Us</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            For general questions, please send us a message and we&rsquo;ll get right back to you. You can also call us directly to speak with a member of our service team or insurance expert.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]"
            >
              Contact Our Team
            </Link>
            <a
              href="tel:2016812743"
              className="rounded-2xl border border-navy/15 bg-white/80 px-8 py-4 font-semibold text-navy transition hover:bg-white"
            >
              (201) 681-2743
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            Monday – Friday: 8:30 AM – 4:30 PM &nbsp;·&nbsp;{" "}
            <a href={gmailCompose({ to: SITE_EMAIL })} target="_blank" rel="noopener noreferrer">
              info@lumibriaba.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}