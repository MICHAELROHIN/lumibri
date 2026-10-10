"use client";

import { useEffect, useRef, useState } from "react";
import "./InsuranceLogos.css";

type Insurer = { name: string; logo: string; bar: string };

/**
 * Put your logo files in /public/insurance/ and match the names below
 * (or change the paths to whatever your files are called).
 */
const insurers: Insurer[] = [
  { name: "Fidelis Care", logo: "/fideliscare.png", bar: "bg-teal" },
  { name: "Aetna", logo: "/aetna.svg", bar: "bg-violet" },
  { name: "Ambetter Health", logo: "/ambetter.png", bar: "bg-magenta" },
  { name: "Wellcare", logo: "/wellcare.svg", bar: "bg-orange" },
];

function LogoCard({ insurer }: { insurer: Insurer }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="ins-card group">
      <span className={`ins-card__bar ${insurer.bar}`} />
      {failed ? (
        <span className="text-lg font-bold text-navy">{insurer.name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={insurer.logo}
          alt={`${insurer.name} logo`}
          className="ins-card__logo"
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function InsuranceLogos() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`ins-section relative overflow-hidden border-y border-navy/5 bg-white ${visible ? "ins-section--in" : ""}`}
    >
      {/* soft drifting colour blobs */}
      <span aria-hidden="true" className="ins-blob ins-blob--a" />
      <span aria-hidden="true" className="ins-blob ins-blob--b" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        {/* <p className="ins-fade mx-auto inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-sm font-semibold text-navy" style={{ ["--i" as string]: 0 }}>
          <span className="h-2 w-2 rounded-full bg-[#5bc46a]" />
          In-network partners
        </p> */}
        <h2 className="ins-fade mt-5 text-4xl font-extrabold tracking-tight text-navy" style={{ ["--i" as string]: 1 }}>
          Insurance plans we work with
        </h2>
        <p className="ins-fade mx-auto mt-4 max-w-xl text-lg text-muted" style={{ ["--i" as string]: 2 }}>
          We work directly with these providers to verify your benefits and simplify authorization.
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {insurers.map((insurer, i) => (
            <li key={insurer.name} className="ins-rise" style={{ ["--i" as string]: i + 3 }}>
              <LogoCard insurer={insurer} />
            </li>
          ))}
        </ul>

        <p className="ins-fade mx-auto mt-12 max-w-xl text-sm leading-6 text-muted" style={{ ["--i" as string]: 8 }}>
          Coverage and authorization vary by plan. Contact our team to verify your benefits and eligibility for services.
        </p>
      </div>
    </section>
  );
}