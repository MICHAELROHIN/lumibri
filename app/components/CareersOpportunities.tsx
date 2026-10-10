"use client";

import { useState } from "react";
import { SITE_EMAIL, gmailCompose } from "../lib/mail";
import { careerRoles } from "../lib/careerRoles";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-7 text-muted">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d46d42]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CareersOpportunities() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {careerRoles.map((role, index) => {
        const isOpen = open === index;
        const buttonId = `role-button-${index}`;
        const panelId = `role-panel-${index}`;

        return (
          <div
            key={role.title}
            className={`rounded-2xl bg-white shadow-sm transition ${
              isOpen ? "shadow-lg" : "hover:-translate-y-0.5 hover:shadow-lg"
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left sm:px-7 sm:py-6"
            >
              <span className="flex items-start gap-4">
                <span className="pt-1 text-sm font-semibold text-[#d46d42]">0{index + 1}</span>
                <span className="text-lg font-semibold leading-7 text-navy">{role.title}</span>
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-2xl text-[#d46d42] transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              >
                →
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mx-6 border-t border-navy/10 pb-8 pt-6 sm:mx-7">
                  <p className="max-w-2xl text-lg leading-8 text-muted">{role.summary}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
                    <div>
                      <h3 className="text-base font-semibold text-navy">What you&rsquo;ll do</h3>
                      <BulletList items={role.responsibilities} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-navy">Qualifications</h3>
                      <BulletList items={role.qualifications} />
                    </div>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={gmailCompose({
                        to: SITE_EMAIL,
                        subject: `Application: ${role.title}`,
                        body: `Hello Lumibri ABA Services team,\n\nI would like to apply for the ${role.title} position. My resume is attached.\n\nThank you,`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/15 transition hover:bg-[#1a2f72]"
                    >
                      Apply for this role <span className="ml-3" aria-hidden>→</span>
                    </a>
                    <p className="text-sm text-muted">Opens an email to {SITE_EMAIL}. Attach your resume.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}