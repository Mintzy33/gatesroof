/**
 * Client-side conversion events for GTM / GA4.
 * GTM container GTM-PXDXPXB9 should map:
 *   - generate_lead → key event (form success)
 *   - phone_click   → key event (tel: taps)
 * Star both as key events in GA4 Admin → Events.
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
