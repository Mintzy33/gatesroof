/**
 * Client-side conversion events for GTM / GA4.
 *
 * What the live GTM container (GTM-PXDXPXB9) actually listens for:
 *   - form_submission → the ONLY dataLayer event wired to the GA4 form tag's
 *     trigger. Nothing pushed it until now, so form conversions never recorded.
 *     We push it from the code side because the container is edited in Alex's
 *     GTM console, not from this repo.
 *   - phone_click     → wired and firing (tel: taps).
 *
 * Also pushed, kept for continuity — do not remove:
 *   - generate_lead   → the intended GA4 key event name for form success;
 *     GTM/GA4 config may reference it.
 *   - lead_form_submit → legacy name the storm form has always pushed.
 *
 * Every form success emits form_submission exactly once: it is pushed only in
 * pushGenerateLead, which pushLeadFormSubmit calls through to.
 * Star form_submission (and phone_click) as key events in GA4 Admin → Events.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function pushGenerateLead(form: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "generate_lead", form, ...extra });
    // The live GTM trigger fires on this name — see the file header.
    window.dataLayer.push({ event: "form_submission", form, ...extra });
  }
}

/** Storm form historically used lead_form_submit — keep both for GTM continuity. */
export function pushLeadFormSubmit(form: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "lead_form_submit", form, ...extra });
  }
  pushGenerateLead(form, extra);
}

export function pushPhoneClick(location: string) {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "phone_click", location });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", { content_name: "phone_call", content_category: location });
  }
}
