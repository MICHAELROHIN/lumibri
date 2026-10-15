import type { Metadata } from "next";
import Link from "next/link";
import GradientText from "../components/GradientText";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Services | Lumibri ABA Services",
  description:
    "In-home ABA therapy and Social Skill Groups for children across Northern New Jersey.",
};

const IMG = "/Lumibri ABA";

const abaSupports = [
  "Communication Skills",
  "Social & Play Skills",
  "Emotional Regulation",
  "Daily Living & Self-Care",
  "Academic Readiness",
  "Behavior Support",
  "School & Community Participation",
  "Independence, Safety & Self-Advocacy",
];

const socialFocus = [
  "Social communication and conversation",
  "Initiating and responding to interactions",
  "Turn-taking and sharing",
  "Perspective-taking and problem-solving",
  "Emotional awareness and regulation",
  "Flexibility and navigating social situations",
  "Cooperative play and group participation",
  "Developing and maintaining positive peer interactions",
];

const process = [
  {
    title: "Initial Consultation",
    text: "We begin by learning about your child, your family’s priorities, and the areas in which support may be appropriate. Our team also reviews available information and answers questions about the ABA service process.",
  },
  {
    title: "Benefits & Authorization",
    text: "Our team works with your insurance provider to verify benefits and identify applicable coverage and authorization requirements. Insurance coverage and authorization are determined by the individual plan and applicable requirements.",
  },
  {
    title: "Individualized Assessment",
    text: "A qualified behavior-analytic professional conducts an assessment to better understand your child’s strengths, skills, needs, preferences, and environmental factors that may influence behavior and learning. The assessment informs individualized treatment recommendations when ABA is clinically appropriate.",
  },
  {
    title: "Treatment & Ongoing Support",
    text: "When services are recommended and authorized, treatment is provided according to an individualized treatment plan. Services may be delivered by a Behavior Technician (BT) or Registered Behavior Technician (RBT) under the supervision of a qualified BCBA or BCaBA.",
  },
];

const stepColors = ["bg-teal", "bg-magenta", "bg-orange", "bg-violet"];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-bg">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-26 lg:grid-cols-2 lg:gap-16 lg:py-4 lg:mt-22">
            <div>
              <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Lumibri ABA Services provides comprehensive, in-home therapy services designed to support the developmental, behavioral, communication, and daily living needs of children throughout Northern New Jersey.
              </p>
               <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
                Choose from individualized in-home ABA therapy and structured Social Skill Groups, each guided by qualified professionals and built around your child.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">
                  Start Intake
                </Link>
                <a href="#process" className="rounded-2xl border border-navy/15 bg-white/80 px-8 py-4 font-semibold text-navy transition hover:bg-white">
                  Explore Services
                </a>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/13.png`}
              alt="Child smiling during an in-home therapy session"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-navy/10 ring-8 ring-white"
            />
          </div>
        </section>

        {/* ABA */}
        <section id="aba" className="scroll-mt-28 bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/9.png`}
              alt="Child in an ABA therapy session"
              className="order-1 aspect-[4/3] w-full rounded-[2rem] object-cover lg:order-none"
            />
            <div className="order-2 lg:order-none">
              <h2 className="text-4xl font-extrabold tracking-tight text-navy">
                Applied Behavior Analysis (ABA)
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                ABA therapy is a widely used, evidence-based approach to autism intervention that focuses on building meaningful skills and reducing behaviors that may interfere with learning, communication, and participation in daily life.
              </p>
              <h3 className="mt-10 text-lg font-bold text-navy">ABA Therapy Supports</h3>
              <CheckList items={abaSupports} />
            </div>
          </div>
        </section>

        {/* Social Skill Group */}
        <section id="social-skill-group" className="scroll-mt-28 bg-[#f5f1eb]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div className="lg:order-1">
              <h2 className="text-4xl font-extrabold tracking-tight text-navy">Social Skill Group</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Our Social Skills Group provides a structured and supportive setting where individuals can practice skills related to social communication, peer interaction, and navigating everyday social situations. Through structured activities, role-playing, cooperative games, and guided peer interactions, participants have opportunities to practice social and emotional skills in an encouraging environment.
              </p>
              <h3 className="mt-10 text-lg font-bold text-navy">Social Skill Group Focus Areas</h3>
              <CheckList items={socialFocus} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/18.png`}
              alt="Children practicing social skills together in a group"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover lg:order-2"
            />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-navy">Our ABA Services Process</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Every child and family has different needs. Our process is designed to provide individualized care—from the initial conversation through assessment, treatment planning, and ongoing services.
              </p>
            </div>
            <ol className="mt-16 grid gap-8 md:grid-cols-2">
              {process.map((step, i) => (
                <li key={step.title} className="rounded-[2rem] bg-[#f5f1eb] p-8 sm:p-10">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${stepColors[i]}`}>
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 leading-8 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-bg px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-navy">
            Ready to <GradientText animationSpeed={4}>Get Started?</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
            Our intake team works with families to coordinate the next steps and schedule an in-home assessment with a qualified behavior analyst.
          </p>
          <Link href="/contact" className="mt-9 inline-flex rounded-2xl bg-navy px-9 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">
            Contact Our Team
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}