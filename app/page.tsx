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
    img: "https://cdn.sanity.io/images/xhxj9s9r/production/dcaac32ff3ec6a4d2a75379938df13b6fb0ce3d5-600x400.png?auto=format&q=80",
    text: "ABA is an evidence-based approach to understanding learning and behavior and how behavior is influenced by the environment. ABA services use individualized strategies to support meaningful skill development, independence, and participation in everyday life. Services may address communication, social interaction, learning, play, daily living skills, adaptive behavior, and other areas based on each individual’s strengths, needs, and priorities.",
  },
  {
    id: "social-skill-group",
    title: "Social Skill Group",
    img: "https://cdn.sanity.io/images/xhxj9s9r/production/a7f661a4afca88ab5c3aaee7e91c3f578b739343-600x400.png?auto=format&q=80",
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

          {/* Light wash only behind the text column; the rest of the wall stays visible */}
          <div
            aria-hidden="true"
            className="home-hero-wash pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,250,245,0.88)_0%,rgba(255,250,245,0.7)_28%,rgba(255,250,245,0.15)_52%,rgba(255,250,245,0)_70%)]"
          />
          {/* Fade the bottom edge into the next section */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-gradient-to-b from-transparent to-white"
          />

          <div className="relative z-10 mx-auto grid min-h-[auto] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-6 sm:pt-36 lg:min-h-screen lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-20">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl">
                Guiding every child toward a place of possibilities
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-navy/75">
                At Lumibri ABA Services, we are dedicated to helping children with autism and developmental challenges reach meaningful milestones through evidence-based therapy and compassionate care.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="/contact" className="rounded-2xl bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-[#1a2f72]">Start Intake</a>
                {/* <a href="#services" className="rounded-2xl border border-navy/15 bg-white/80 px-8 py-4 font-semibold text-navy transition hover:bg-white">Explore Services</a> */}
              </div>
              <p className="mt-6 text-sm font-medium text-navy/70">In-home ABA across Northern New Jersey</p>
            </div>
            <div className="relative mx-auto w-full max-w-md px-3 sm:px-0">
              {/* offset colour blocks behind the photo */}
              <span aria-hidden="true" className="absolute -left-6 -top-6 h-full w-full rotate-[-6deg] rounded-[2.5rem] bg-gradient-to-br from-teal to-violet opacity-90" />
              <span aria-hidden="true" className="absolute -bottom-5 -right-5 h-full w-full rotate-[4deg] rounded-[2.5rem] bg-gradient-to-tr from-orange to-magenta opacity-80" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.sanity.io/images/xhxj9s9r/production/b2c6913b9e28e6b19d9a3057af6753cb6a9bbd7c-600x400.png?auto=format&q=80"
                alt="Child smiling in therapy"
                className="relative aspect-[4/5] w-full rounded-[2.5rem] border-[10px] border-white object-cover shadow-2xl shadow-navy/25"
              />
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