"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NAVY = "#0D2137";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const ACCENT = "#2563EB";

export default function TermsContent() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: TEXT_LIGHT, marginBottom: 40 }}>
          Effective Date: April 1, 2026 | Last Updated: April 1, 2026
        </p>

        <Section title="Acceptance of Terms">
          <p>
            By accessing or using the website located at{" "}
            <a href="https://www.gatesroof.com" style={{ color: ACCENT, textDecoration: "none" }}>
              gatesroof.com
            </a>{" "}
            (the &quot;Site&quot;) or engaging the services of Gates Enterprises LLC (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms, you must not use our Site or
            services.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the Site or our
            services following any changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="Description of Services">
          <p>
            Gates Enterprises LLC is a Colorado-licensed general contractor specializing in residential and
            commercial exterior services, including but not limited to:
          </p>
          <ul style={listStyle}>
            <li>Roof replacement and roof repair</li>
            <li>Storm and hail damage restoration</li>
            <li>Siding installation and repair</li>
            <li>Gutter and gutter guard installation</li>
            <li>Window replacement</li>
            <li>Exterior and interior paint</li>
            <li>General contracting services</li>
            <li>Insurance claim assistance and restoration</li>
            <li>Drone roof inspections</li>
          </ul>
          <p>
            The specific scope, terms, and pricing of any project will be defined in a separate written
            agreement or estimate provided to you prior to the commencement of work.
          </p>
        </Section>

        <Section title="Free Inspections">
          <p>
            Gates Enterprises LLC offers complimentary roof and exterior inspections at no cost or obligation
            to the property owner. A free inspection is an evaluation of visible exterior conditions and does
            not constitute a comprehensive engineering assessment or guarantee of any specific findings.
          </p>
          <p>
            Inspection results and recommendations are based on the professional judgment of our inspectors at
            the time of the inspection. Conditions may exist that are not visible or detectable during a
            standard inspection. A free inspection does not create a contractual obligation for either party
            to proceed with any services.
          </p>
        </Section>

        <Section title="Estimates and Pricing">
          <p>
            All estimates provided by Gates Enterprises LLC are based on the information available at the time
            of assessment, including visible conditions, measurements, and material costs. Estimates are
            subject to change if additional work, materials, or unforeseen conditions are discovered during
            the course of the project.
          </p>
          <p>
            Final pricing will be confirmed in a written agreement prior to the start of any work. We will
            communicate any material changes in scope or cost before proceeding. Insurance restoration
            projects are priced according to industry-standard estimating software (e.g., Xactimate) and are
            subject to approval by your insurance carrier.
          </p>
        </Section>

        <Section title="Insurance Claims">
          <p>
            Gates Enterprises LLC assists homeowners and property owners with the insurance claim process for
            storm damage, hail damage, and other covered losses. We coordinate with insurance adjusters,
            prepare documentation, and file supplements on your behalf when applicable.
          </p>
          <p>
            However, we do not guarantee any specific outcome regarding your insurance claim. The approval,
            scope, and payment of insurance claims are determined solely by your insurance carrier in
            accordance with your policy. Gates Enterprises LLC is not an insurance company, public adjuster,
            or legal representative, and our assistance with the claims process does not constitute insurance
            advice or legal counsel.
          </p>
          <p>
            You are ultimately responsible for understanding the terms of your insurance policy, including your
            deductible, coverage limits, and any applicable depreciation.
          </p>
        </Section>

        <Section title="Warranties">
          <p>
            Gates Enterprises LLC provides warranties on both materials and workmanship, subject to the
            following:
          </p>
          <h4 style={subheadingStyle}>Manufacturer Warranties</h4>
          <p>
            Roofing materials and products installed by Gates Enterprises LLC may carry manufacturer
            warranties from brands such as GAF, Owens Corning, Malarkey, and CertainTeed. The specific terms,
            duration, and coverage of manufacturer warranties are determined by the respective manufacturer
            and are provided to you at the completion of your project. Gates Enterprises LLC is not
            responsible for manufacturer warranty claims beyond facilitating the initial registration.
          </p>
          <h4 style={subheadingStyle}>Workmanship Warranty</h4>
          <p>
            Gates Enterprises LLC stands behind the quality of our installation. Our workmanship warranty
            covers defects in installation and labor for the period specified in your project agreement.
            Workmanship warranty claims must be reported to us promptly upon discovery. This warranty does not
            cover damage caused by severe weather events, acts of nature, improper maintenance, unauthorized
            modifications, or normal wear and tear.
          </p>
          <p>
            For complete warranty details, please visit our{" "}
            <a href="/warranty" style={{ color: ACCENT, textDecoration: "none" }}>
              Warranty page
            </a>{" "}
            or contact us directly.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, Gates Enterprises LLC, its officers, directors,
            employees, agents, and contractors shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your use of the Site, our
            services, or these Terms, regardless of the theory of liability.
          </p>
          <p>
            Our total liability for any claim arising under these Terms or in connection with our services
            shall not exceed the total amount paid by you to Gates Enterprises LLC for the specific project
            giving rise to the claim.
          </p>
          <p>
            Nothing in these Terms shall limit liability for death or personal injury caused by negligence, or
            for fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or
            limited under applicable law.
          </p>
        </Section>

        <Section title="Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Gates Enterprises LLC, its officers, directors,
            employees, agents, and contractors from and against any and all claims, liabilities, damages,
            losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related
            to:
          </p>
          <ul style={listStyle}>
            <li>Your use of the Site or our services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Any misrepresentation or breach of warranty by you</li>
            <li>Any claim by a third party related to your property or project</li>
          </ul>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of
            Colorado, without regard to its conflict of law principles. Any legal action or proceeding arising
            under or relating to these Terms shall be brought exclusively in the state or federal courts
            located in Jefferson County, Colorado, and you consent to the personal jurisdiction of such courts.
          </p>
        </Section>

        <Section title="Dispute Resolution">
          <p>
            In the event of any dispute, claim, or controversy arising out of or relating to these Terms or
            our services, the parties agree to first attempt to resolve the matter through good-faith
            negotiation. If the dispute cannot be resolved through negotiation within thirty (30) days, either
            party may pursue mediation before a mutually agreed-upon mediator in Jefferson County, Colorado.
          </p>
          <p>
            If mediation is unsuccessful, either party may pursue binding arbitration or litigation in
            accordance with the Governing Law section above. Nothing in this section shall prevent either
            party from seeking injunctive or equitable relief in a court of competent jurisdiction.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All content on the Site, including but not limited to text, graphics, logos, images, photographs,
            videos, and software, is the property of Gates Enterprises LLC or its licensors and is protected
            by applicable copyright, trademark, and other intellectual property laws. You may not reproduce,
            distribute, modify, or create derivative works from any content on the Site without our prior
            written consent.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We reserve the right to update or modify these Terms at any time without prior notice. When we
            make changes, we will update the &quot;Last Updated&quot; date at the top of this page. Your
            continued use of the Site or our services after any changes constitutes your acceptance of the
            revised Terms. We encourage you to review these Terms periodically.
          </p>
        </Section>

        <Section title="Contact Information">
          <p>
            If you have questions about these Terms of Service, please contact us:
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
