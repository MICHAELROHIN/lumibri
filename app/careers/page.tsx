import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import CareersOpportunities from "../components/CareersOpportunities";
import { SITE_EMAIL, gmailCompose } from "../lib/mail";

export const metadata: Metadata = {
  title: "Careers | Lumibri ABA Services",
  description:
    "Join the Lumibri ABA Services team and build a rewarding career in behavioral healthcare.",
};

const heroImage =
  "https://cdn.sanity.io/images/xhxj9s9r/production/b2c6913b9e28e6b19d9a3057af6753cb6a9bbd7c-600x400.png?auto=format&q=80";

const benefits = [
  "Competitive Compensation",
  "Flexible Scheduling",
  "Professional Development Opportunities",
  "Supportive Team Environment",
  "Career Growth Pathways",
  "Meaningful Work That Changes Lives",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d46d42]">
      {children}
    </p>
  );
}

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-36 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pb-28 lg:pt-48">
            <div className="max-w-xl">
              <Eyebrow>Careers at Lumibri</Eyebrow>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl">
                Join a team that makes every step matter.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-muted sm:text-xl">
                Make a meaningful impact while building a rewarding career in
                behavioral healthcare.
              </p>
              <a
                href="#opportunities"
                className="mt-9 inline-flex rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/15 transition hover:-translate-y-0.5 hover:bg-[#1a2f72]"
              >
                Explore opportunities <span className="ml-3" aria-hidden>↓</span>
              </a>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f4c76b]/60 sm:-right-12 sm:-top-12 sm:h-36 sm:w-36" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt="Therapy team collaborating"
                className="relative aspect-[1.08] w-full max-w-xl rounded-[2rem] object-cover shadow-2xl shadow-navy/10 sm:rounded-[2.5rem]"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:block">
                <p className="text-sm font-semibold text-navy">Little steps.</p>
                <p className="text-sm text-muted">Lasting impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>Why work with us?</Eyebrow>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
                Grow your career while changing lives.
              </h2>
            </div>
            <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 border-b border-navy/10 py-6 first:pt-0 sm:nth-[2]:pt-0"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9f3ef] text-sm font-bold text-[#3d8875]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="max-w-xs text-lg font-semibold leading-7 text-navy">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opportunities" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:py-32">
            <div>
              <Eyebrow>Current opportunities</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
                Find your place on our team.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-muted">
                We are growing our team and welcome professionals interested in
                joining our clinical and administrative teams.
              </p>
            </div>

            <CareersOpportunities />
          </div>
        </section>

        <section className="hero-bg px-6 py-28 text-center sm:px-10">
          <Eyebrow>Don&apos;t see your role?</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
            We are always looking for passionate clinicians.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
            Send us your resume, and we&apos;ll reach out when a position
            opens.
          </p>
          <a
            href={gmailCompose({ to: SITE_EMAIL, subject: "Resume Submission - Lumibri ABA Services Career" })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]"
          >
            Email Resume <span className="ml-3" aria-hidden>→</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}