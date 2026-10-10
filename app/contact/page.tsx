import type { Metadata } from "next";
import GradientText from "../components/GradientText";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { SITE_EMAIL, gmailCompose } from "../lib/mail";

export const metadata: Metadata = {
  title: "Contact Us | Lumibri ABA Services",
  description:
    "Contact Lumibri ABA Services to learn more about ABA therapy and schedule an intake consultation.",
};

const heroImage =
  "https://cdn.sanity.io/images/xhxj9s9r/production/5982286b756786dfb4ec4c5bc7a1b8fba1b71ba5-600x400.png?auto=format&q=80";

const steps = [
  ["Contact Us", "Reach out by phone or email. Our intake team will answer your questions and guide you."],
  ["Intake & Assessment", "We gather information, verify insurance, and create a personalized care plan."],
  ["Begin Services", "Therapy begins with a dedicated ABA team matched to your child’s needs."],
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-36 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-28 lg:pt-48">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d46d42]">
                Get in touch
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl">
                We&apos;re here for you.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-muted sm:text-xl">
                Whether you&apos;re ready to start therapy or just have a few
                questions, our team is standing by to help.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f4c76b]/60 sm:-right-12 sm:-top-12 sm:h-36 sm:w-36" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt="Child and therapist working together"
                className="relative aspect-[1.15] w-full max-w-xl rounded-[2rem] object-cover shadow-2xl shadow-navy/10 sm:rounded-[2.5rem]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d46d42]">
              What to expect
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
              Start ABA therapy in 3 simple steps.
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {steps.map(([title, text], index) => (
              <li key={title} className="border-t border-navy/15 pt-6">
                <span className="text-4xl font-semibold tracking-[-0.04em] text-[#d46d42]">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d46d42]">
                Contact information
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
                Let&apos;s start a conversation.
              </h2>
              <div className="mt-10 space-y-7">
                <div>
                  <h3 className="font-semibold text-navy">Office Address</h3>
                  <p className="mt-2 leading-7 text-muted">
                    One Gateway Center, Suite 2600
                    <br />
                    Newark, NJ 07102
                    <br />
                    <span className="text-sm">(Main Office - Telehealth Only; Not a Clinic)</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone number</h3>
                  <a href="tel:2016812743" className="mt-2 inline-block text-muted underline decoration-[#d46d42] underline-offset-4">
                    (201) 681-2743
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <a href={gmailCompose({ to: SITE_EMAIL })} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-muted underline decoration-[#d46d42] underline-offset-4">
                    info@lumibriaba.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Office hours</h3>
                  <p className="mt-2 text-muted">Monday – Friday: 8:30 AM – 4:30 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Service area</h3>
                  <p className="mt-2 text-muted">Northern New Jersey</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="hero-bg px-6 py-28 text-center sm:px-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy sm:text-5xl">
            Ready to schedule an official{" "}
            <GradientText animationSpeed={4}> intake consultation?</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Contact us today to schedule a consultation and learn how our
            team can support your child&apos;s developmental journey.
          </p>
          <a href="#message" className="mt-8 inline-flex rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">
            Go to Intake Form <span className="ml-3" aria-hidden>↓</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}