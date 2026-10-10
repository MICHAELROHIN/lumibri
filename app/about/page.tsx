import type { Metadata } from "next";
import Link from "next/link";
import BlurText from "../components/BlurText";
import GradientText from "../components/GradientText";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Lumibri ABA Services",
  description:
    "Lumibri ABA Services empowers children and supports families through evidence-based behavioral therapies across Northern New Jersey.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-6 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl">
                About Lumibri ABA Services
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
                Empowering children and supporting families through evidence-based behavioral therapies across Northern New Jersey.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Lumibri ABA/11.png"
                alt="Child and therapist working together"
                className="aspect-[3/2] w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#f5f1eb]">
          <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy">Our mission</h2>
          <BlurText
            text="To provide high-quality, compassionate, and individualized therapy services that support children and families across Northern New Jersey."
            delay={70}
            className="mt-8 font-display text-2xl font-lg leading-snug text-navy sm:text-3xl"
          />
          </div>
        </section>

        {/* Vision */}
        <section className="bg-navy py-28 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="text-5xl font-semibold tracking-tight">Our vision</h2>
              <div className="mt-6 flex gap-2" aria-hidden>
                {["bg-teal", "bg-magenta", "bg-orange", "bg-violet", "bg-[#5bc46a]"].map((c) => (
                  <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
                ))}
              </div>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/75">
              <BlurText
                text="We envision a future where every child has timely access to high-quality, compassionate therapy services that help them reach their fullest potential."
                delay={55}
                className="font-display text-2xl font-lg leading-snug text-white"
              />
              <BlurText
                text="We strive to empower families by providing guidance, advocacy, and support as they navigate their child’s developmental journey."
                delay={45}
                className="font-display text-2xl font-lg leading-snug text-white"
              />
              <BlurText
                text="Through collaboration, evidence-based practices, and meaningful partnerships, we aim to strengthen children, families, and communities. Our vision is to be a trusted partner that families can rely on every step of the way."
                delay={35}
                className="font-display text-2xl font-lg leading-snug text-white"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-bg px-6 py-28 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-navy">
            Ready to <GradientText animationSpeed={4}>learn more?</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Our team is here to answer your questions, help you understand the next steps, verify insurance coverage, and assist with scheduling your initial assessment.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">Begin Registration</Link>
            <Link href="/contact" className="rounded-2xl border border-navy/15 bg-white/80 px-8 py-4 font-semibold text-navy transition hover:bg-white">Send Message</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}