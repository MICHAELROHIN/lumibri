// Central place for email settings.
export const SITE_EMAIL = "info@lumibriaba.com";

// Contact-form messages are sent HERE. Change this when you are ready.
export const FORM_RECIPIENT = "info@lumibriaba.com";

/** Opens a Gmail compose window with the "To" (and optional subject/body) filled in. */
export function gmailCompose({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) {
  let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
  if (subject) url += `&su=${encodeURIComponent(subject)}`;
  if (body) url += `&body=${encodeURIComponent(body)}`;
  return url;
}