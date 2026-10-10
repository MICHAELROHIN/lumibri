import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import GridMotion from "./components/GridMotion";
import GradientText from "./components/GradientText";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import InsuranceLogos from "./components/InsuranceLogos";

const footerNav = ["Home", "About Us", "Services", "Locations", "Careers"];
const dots = ["bg-teal", "bg-magenta", "bg-orange", "bg-violet", "bg-[#5bc46a]"];

// Reads every image in public/Lumibri ABA automatically (no filenames needed).
function loadGridImages(): string[] {
  const folder = "Lumibri ABA";
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", folder))
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/${encodeURIComponent(folder)}/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

const fallbackGridItems = [
  "https://cdn.sanity.io/images/xhxj9s9r/production/b2c6913b9e28e6b19d9a3057af6753cb6a9bbd7c-600x400.png?auto=format&q=80",
  "https://cdn.sanity.io/images/xhxj9s9r/production/dcaac32ff3ec6a4d2a75379938df13b6fb0ce3d5-600x400.png?auto=format&q=80",
  "https://cdn.sanity.io/images/xhxj9s9r/production/a7f661a4afca88ab5c3aaee7e91c3f578b739343-600x400.png?auto=format&q=80",
];
const localImages = loadGridImages();
const gridItems = localImages.length ? localImages : fallbackGridItems;

const services = [
  {
    id: "aba",
    title: "Applied Behavior Analysis (ABA)",
    img: "/Lumibri ABA/6.png",
    text: "ABA is an evidence-based approach to understanding learning and behavior and how behavior is influenced by the environment. ABA services use individualized strategies to support meaningful skill development, independence, and participation in everyday life. Services may address communication, social interaction, learning, play, daily living skills, adaptive behavior, and other areas based on each individual’s strengths, needs, and priorities.",
  },
  {
    id: "social-skill-group",
    title: "Social Skill Group",
    img: "/Lumibri ABA/18.png",
    text: "Social Skills Groups provide structured opportunities for children to develop and practice social, communication, and adaptive skills through guided activities and peer interactions. Groups may address skills such as initiating and maintaining interactions, turn-taking, sharing, following group expectations, responding to others, perspective-taking, problem-solving, and emotional regulation. Intervention is individualized to each child’s needs and may include modeling, prompting, reinforcement, and opportunities to practice and generalize skills across people, activities, and settings.",
  },
];

const approach = [
  ["Individualized Care", "Services are tailored to each child’s needs, priorities, skills, and treatment goals."],
  ["Experienced Clinical Team", "Our clinical and direct-care team has a range of experience supporting children with autism and developmental differences."],
  ["Ongoing Assessment", "Assessment and data help inform treatment decisions and guide ongoing care."],
  ["Family Partnership", "Parents and caregivers are important partners. We provide education, training, and collaboration."],
  ["Flexible Service Delivery", "Services may be provided in the home, community, or other settings based on your child’s needs."],
];

const journey = [
  ["Intake", "We begin with a consultation to learn about your child, your family’s priorities, and where ABA support may help."],
  ["Insurance Verification", "We work directly with insurance providers to verify benefits and simplify authorization."],
  ["Initial Assessment", "A qualified behavior analyst identifies strengths, challenges, and therapy goals."],
  ["Therapy Journey Begins", "Once services are recommended and authorized, therapy begins with your care team, with ongoing collaboration."],
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden">
          {/* Animated photo wall (background layer) */}
          <div className="home-grid-motion absolute inset-0 z-0">
            <GridMotion
              items={gridItems}
              theme="light"
              rows={3}
              aspectRatio={1.5}
              gap={20}
              radius={24}
              angle={-8}
              tilt={0}
              speed={20}
              direction="alternate"
              parallax={0.4}
              spotlight={0.8}
              dim={0.1}
              fade={0.3}
            />
          </div>

          {/* Soft edge fade so the photo wall blends into the page */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(255,250,245,0.35)_0%,rgba(255,250,245,0)_65%)]"
          />
          {/* Fade the bottom edge into the next section */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-gradient-to-b from-transparent to-white"
          />

          <div className="relative z-10 mx-auto flex min-h-[auto] max-w-7xl items-center justify-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-screen">
            {/* Glass card */}
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 px-6 py-12 text-center shadow-[0_30px_80px_-20px_rgba(20,35,90,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 sm:rounded-[3rem] sm:px-14 sm:py-16">
              {/* Coloured glow blobs inside the glass */}
              <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-magenta/20 blur-3xl" />
              <span aria-hidden="true" className="pointer-events-none absolute left-1/3 top-1/2 h-48 w-48 rounded-full bg-orange/20 blur-3xl" />

              <div className="relative">
                {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-sm font-medium text-navy shadow-sm backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5bc46a]" />
                  In-home ABA across Northern New Jersey
                </span> */}

                <h1 className="mx-auto mt-7 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-6xl">
                  Guiding every child towards a place of{" "}
                  <GradientText animationSpeed={4}>possibilities</GradientText>
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-navy/75">
                  At Lumibri ABA Services, we are dedicated to helping children with autism and developmental challenges reach meaningful milestones through evidence-based therapy and compassionate care.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/25 transition hover:bg-[#1a2f72]"
                  >
                    Start Intake
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-white/80 bg-white/80 px-8 py-4 font-semibold text-navy shadow-sm backdrop-blur transition hover:bg-white"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <InsuranceLogos />

        {/* Services */}
        <section id="services" className="bg-[#fffaf5]">
          <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">Comprehensive services</h2>
            <p className="mt-4 text-lg text-muted">Evidence-based therapy tailored to your child’s unique needs and goals.</p>
          </div>
          <div className="mt-16 space-y-24">
            {services.map((s, i) => (
              <article key={s.id} id={s.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className={`aspect-[3/2] w-full rounded-[2rem] object-cover ${i % 2 ? "md:order-2" : ""}`} />
                <div>
                  <h3 className="text-2xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-4 leading-8 text-muted">{s.text}</p>
                  <Link href={`/services#${s.id}`} className="mt-6 inline-block font-semibold text-violet underline underline-offset-4">Learn more</Link>
                </div>
              </article>
            ))}
          </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-navy py-28 text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight">Our approach</h2>
              <p className="mt-4 max-w-sm text-lg text-white/70">Care that starts with your child and includes your family.</p>
            </div>
            <ul className="divide-y divide-white/10">
              {approach.map(([t, d], i) => (
                <li key={t} className="flex gap-5 py-6 first:pt-0">
                  <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${dots[i]}`} />
                  <div>
                    <h3 className="text-lg font-bold">{t}</h3>
                    <p className="mt-1 leading-7 text-white/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Journey */}
        <section className="bg-[#f5f1eb]">
          <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">Your child’s ABA journey</h2>
            <p className="mt-4 text-lg text-muted">A clear, individualized process from first conversation to ABA services.</p>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {journey.map(([t, d], i) => (
              <li key={t} className="relative">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${dots[i]}`}>{i + 1}</span>
                {i < 3 && <span className="absolute left-14 right-0 top-6 hidden h-px bg-navy/15 md:block" />}
                <h3 className="mt-5 text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 leading-7 text-muted">{d}</p>
              </li>
            ))}
          </ol>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="hero-bg px-6 py-28 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-navy">
            Ready to <GradientText animationSpeed={4}>Get Started?</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Our intake team will answer your questions, explain the ABA process, and help you understand the next steps.
          </p>
          <a href="/contact" className="mt-9 inline-flex rounded-2xl bg-navy px-9 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">Get Started</a>
        </section>
      </main>

      <Footer />
    </>
  );
}