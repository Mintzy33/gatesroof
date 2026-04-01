"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NAVY = "#0D2137";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const ACCENT = "#2563EB";

export default function PrivacyContent() {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 20px 60px",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: NAVY,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: TEXT_LIGHT, marginBottom: 40 }}>
          Effective Date: April 1, 2026 | Last Updated: April 1, 2026
        </p>

        <Section title="Introduction">
          <p>
            Gates Enterprises LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
            your privacy and is committed to protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website at{" "}
            <a href="https://www.gatesroof.com" style={{ color: ACCENT, textDecoration: "none" }}>
              gatesroof.com
            </a>{" "}
            (the &quot;Site&quot;) or use our services.
          </p>
          <p>
            By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree
            with the practices described herein, please do not use our Site.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>We may collect the following types of information:</p>
          <h4 style={subheadingStyle}>Personal Information You Provide</h4>
          <ul style={listStyle}>
            <li>Name, email address, phone number, and mailing address when you submit a contact form, request an inspection, or request an estimate</li>
            <li>Property address and details related to your roofing or exterior project</li>
            <li>Insurance claim information when you engage us for insurance restoration work</li>
            <li>Any other information you voluntarily provide through forms, email, or phone communications</li>
          </ul>
          <h4 style={subheadingStyle}>Information Collected Automatically</h4>
          <ul style={listStyle}>
            <li>IP address, browser type, operating system, and device information</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>Geographic location (city/region level) based on IP address</li>
            <li>Cookies and similar tracking technologies (see below)</li>
          </ul>
        </Section>

        <Section title="Use of Information">
          <p>We use the information we collect to:</p>
          <ul style={listStyle}>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Schedule inspections, prepare estimates, and manage projects</li>
            <li>Communicate with you about your project, including follow-up and service updates</li>
            <li>Send marketing communications, such as promotions, newsletters, or service reminders (you may opt out at any time)</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </Section>

        <Section title="Cookies and Tracking Technologies">
          <p>
            Our Site uses cookies and similar tracking technologies to enhance your experience and analyze
            website performance. These include:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Google Analytics (GA4):</strong> We use Google Analytics 4 to collect anonymized data
              about website traffic, user behavior, and engagement metrics. Google Analytics uses cookies to
              track interactions on our Site. You can learn more about Google&apos;s privacy practices at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: ACCENT, textDecoration: "none" }}
              >
                policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Google Tag Manager (GTM-PXDXPXB9):</strong> We use Google Tag Manager to manage and
              deploy marketing tags and analytics scripts on our Site. GTM itself does not collect personal
              data but facilitates the deployment of tags that may.
            </li>
            <li>
              <strong>Meta Pixel (Facebook Pixel ID: 1621445598880955):</strong> We use the Meta Pixel to
              measure the effectiveness of our advertising campaigns on Facebook and Instagram, track
              conversions, and build targeted audiences. The Meta Pixel collects data about your interactions
              with our Site and may link this data to your Facebook profile. You can learn more at{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: ACCENT, textDecoration: "none" }}
              >
                facebook.com/privacy/policy
              </a>
              .
            </li>
          </ul>
          <p>
            You may control cookies through your browser settings. Most browsers allow you to refuse or delete
            cookies. Please note that disabling cookies may affect the functionality of certain features on our
            Site.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            We may share your information with third-party service providers who assist us in operating our
            website, conducting business, or servicing you, including:
          </p>
          <ul style={listStyle}>
            <li>Website hosting and analytics providers</li>
            <li>Customer relationship management (CRM) platforms</li>
            <li>Email marketing and communication tools</li>
            <li>Advertising platforms (Google Ads, Meta/Facebook Ads)</li>
            <li>Payment processing services</li>
          </ul>
          <p>
            These third parties are contractually obligated to use your information only for the purposes of
            providing services to us and are required to maintain the confidentiality and security of your data.
          </p>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your
            personal information from unauthorized access, alteration, disclosure, or destruction. However, no
            method of transmission over the Internet or electronic storage is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Our Site and services are not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children under 13. If we become aware that we have inadvertently
            collected personal information from a child under 13, we will take steps to delete such information
            promptly. If you believe a child has provided us with personal information, please contact us
            immediately.
          </p>
        </Section>

        <Section title="California Privacy Rights">
          <p>
            If you are a California resident, you may have additional rights under the California Consumer
            Privacy Act (CCPA), including:
          </p>
          <ul style={listStyle}>
            <li>The right to know what personal information we collect, use, and disclose</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt out of the sale of your personal information (we do not sell personal information)</li>
            <li>The right to non-discrimination for exercising your privacy rights</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
        </Section>

        <Section title="Colorado Privacy Rights">
          <p>
            If you are a Colorado resident, you may have additional rights under the Colorado Privacy Act (CPA),
            including:
          </p>
          <ul style={listStyle}>
            <li>The right to access your personal data</li>
            <li>The right to correct inaccuracies in your personal data</li>
            <li>The right to delete your personal data</li>
            <li>The right to obtain a portable copy of your personal data</li>
            <li>The right to opt out of targeted advertising, the sale of personal data, or profiling</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below. We will respond
            to verified requests within the timeframes required by applicable law.
          </p>
        </Section>

        <Section title="Changes to This Privacy Policy">
          <p>
            We reserve the right to update or modify this Privacy Policy at any time. When we make changes, we
            will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review
            this Privacy Policy periodically to stay informed about how we protect your information. Your
            continued use of the Site after any changes constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact Information">
          <p>
            If you have questions about this Privacy Policy or wish to exercise your privacy rights, please
            contact us:
          </p>
          <div style={{ background: "#F8F9FA", borderRadius: 8, padding: "20px 24px", marginTop: 12 }}>
            <p style={{ margin: "0 0 4px", fontWeight: 600, color: NAVY }}>Gates Enterprises LLC</p>
            <p style={{ margin: "0 0 4px", color: TEXT }}>1445 Holland St, Lakewood, CO 80215</p>
            <p style={{ margin: "0 0 4px", color: TEXT }}>
              Phone:{" "}
              <a href="tel:7207663377" style={{ color: ACCENT, textDecoration: "none" }}>
                (720) 766-3377
              </a>
            </p>
            <p style={{ margin: "0 0 4px", color: TEXT }}>
              Email:{" "}
              <a href="mailto:info@gatesroof.com" style={{ color: ACCENT, textDecoration: "none" }}>
                info@gatesroof.com
              </a>
            </p>
            <p style={{ margin: 0, color: TEXT }}>
              Website:{" "}
              <a href="https://www.gatesroof.com" style={{ color: ACCENT, textDecoration: "none" }}>
                gatesroof.com
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: NAVY,
          marginBottom: 12,
          paddingBottom: 8,
          borderBottom: "1px solid rgba(13,33,55,0.08)",
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT }}>{children}</div>
    </section>
  );
}

const subheadingStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: NAVY,
  marginTop: 16,
  marginBottom: 8,
};

const listStyle: React.CSSProperties = {
  paddingLeft: 24,
  marginBottom: 12,
};
