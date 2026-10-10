import Link from "next/link";
import { nav } from "./navbar/nav";
import { SITE_EMAIL, gmailCompose } from "../lib/mail";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../lib/social";

const socials = [
  {
    name: "Facebook",
    url: FACEBOOK_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: INSTAGRAM_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold text-white">Little steps matter</p>
          <p className="mt-3 leading-7">
            Supporting meaningful moments of growth, connection, and learning, one step at a time.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url || "#"}
                aria-label={s.name}
                {...(s.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white">Quick links</h4>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Our services</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/services#aba" className="hover:text-white">Applied Behavior Analysis (ABA)</Link></li>
            <li><Link href="/services#social-skill-group" className="hover:text-white">Social Skill Group</Link></li>
          </ul>
          <h4 className="mt-6 font-bold text-white">Legal</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy &amp; Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Contact info</h4>
          <address className="mt-3 space-y-2 not-italic">
            <p>One Gateway Center, Suite 2600<br />Newark, NJ 07102</p>
            <p><a href="tel:+12016812743" className="hover:text-white">(201) 681-2743</a></p>
            <p><a href={gmailCompose({ to: SITE_EMAIL })} target="_blank" rel="noopener noreferrer" className="hover:text-white">info@lumibriaba.com</a></p>
            <p>Monday – Friday: 8:30 AM – 4:30 PM</p>
            <p>Offering in-home ABA services across Northern New Jersey, subject to service availability.</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm">
        <p>
          <strong className="text-white">Important Notice:</strong> For urgent or emergency concerns, please contact your local emergency services or appropriate healthcare provider. Our office is not an emergency response service.
        </p>
        <p className="mt-2">© 2026 Lumibri ABA Services. All rights reserved.</p>
      </div>
    </footer>
  );
}