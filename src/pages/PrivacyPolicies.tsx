/**
 * PRIVACY POLICY PAGE
 * --------------------------------------------------------------
 * Route suggestion: /privacy-policy
 *
 * Design intent: unlike the portfolio page, a legal document's job is to
 * be scannable and trustworthy, not visually loud. Motion is nearly zero,
 * the layout is a classic sidebar-TOC + reading column, and type is sized
 * for long-form reading rather than display impact. Brand tokens (bg,
 * accent, Fraunces display font) are kept so it still feels like the same
 * site — just in its "quiet" register.
 *
 * Requires the same font-display (Fraunces) setup as the portfolio page.
 * No new dependencies beyond what's already in the project.
 * --------------------------------------------------------------
 */

import Section, { Container } from "@/components/global/Section";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "who-we-are", number: "1", title: "Who We Are" },
  { id: "information-we-collect", number: "2", title: "Information We Collect" },
  { id: "how-we-use-your-information", number: "3", title: "How We Use Your Information" },
  { id: "legal-basis", number: "4", title: "Legal Basis for Processing" },
  { id: "how-we-share", number: "5", title: "How We Share Your Information" },
  { id: "your-rights", number: "6", title: "Your Privacy Rights" },
  { id: "data-retention", number: "7", title: "Data Retention" },
  { id: "data-security", number: "8", title: "Data Security" },
  { id: "third-party-sites", number: "9", title: "Third-Party Websites and Links" },
  { id: "childrens-privacy", number: "10", title: "Children's Privacy" },
  { id: "international-transfers", number: "11", title: "International Data Transfers" },
  { id: "gpc", number: "12", title: "Global Privacy Control (GPC)" },
  { id: "changes", number: "13", title: "Changes to This Privacy Policy" },
  { id: "contact", number: "14", title: "Contact Us — Privacy Matters" },
];

const retentionTable = [
  { category: "Contact form inquiries (no engagement)", period: "12 months from date of submission" },
  { category: "Client project records and communications", period: "7 years from project completion (IRS and Texas tax law requirements)" },
  { category: "Financial records, invoices, payments", period: "7 years minimum (federal and Texas tax obligations)" },
  { category: "Website analytics data", period: "26 months (Google Analytics default) or as configured" },
  { category: "Email correspondence with clients", period: "7 years from last interaction or project close" },
  { category: "Cookie data", period: "As specified in cookie settings (typically 30 days to 2 years depending on type)" },
];

// Small building blocks kept local to this file since they're only used here.
const H2 = ({ id, number, title }: { id: string; number: string; title: string }) => (
  <h2 id={id} className="scroll-mt-28 font-display text-2xl font-normal text-white sm:text-3xl">
    <span className="mr-3 text-[#00B4D8]">{number}.</span>
    {title}
  </h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-8 text-lg font-semibold text-white">{children}</h3>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 text-base leading-7 text-slate-400">{children}</p>
);

const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mt-4 space-y-2 text-base leading-7 text-slate-400">{children}</ul>
);

const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#00B4D8]" />
    <span>{children}</span>
  </li>
);

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#050810] text-white">
      {/* ---------------------------------------------------------------- */}
      {/* HEADER — quiet, informational, not a full marketing hero          */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#90E0EF]">
            Legal
          </p>
          <h1 className="mt-5 font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
            <p>Fenomenon Creative LLC d/b/a Krieto</p>
            <p>Effective: July 8, 2026</p>
            <p>Last Updated: July 8, 2026</p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            This Privacy Policy explains how Fenomenon Creative LLC, doing
            business as Krieto (&ldquo;Krieto,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses,
            and protects your personal information when you visit krieto.co
            (the &ldquo;Website&rdquo;) or engage with our advertising,
            design, and marketing services.
          </p>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BODY — sticky TOC + reading column                                */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* Table of contents — sticky on desktop, horizontal scroll on mobile */}
            <nav
              aria-label="Table of contents"
              className="lg:sticky lg:top-24 lg:h-fit"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                On this page
              </p>
              <ul className="flex gap-4 overflow-x-auto pb-4 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                {sections.map((section) => (
                  <li key={section.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${section.id}`}
                      className="block whitespace-nowrap text-sm text-slate-500 transition-colors hover:text-[#00B4D8] lg:whitespace-normal"
                    >
                      {section.number}. {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Reading column */}
            <div className="max-w-3xl space-y-16">
              {/* 1 */}
              <div>
                <H2 id="who-we-are" number="1" title="Who We Are" />
                <P>
                  Fenomenon Creative LLC is a Texas limited liability company
                  doing business as Krieto, a full-service advertising,
                  design, and marketing agency. We operate the website
                  krieto.co under the Krieto trade name and provide services
                  including but not limited to brand identity design, web
                  development, digital marketing, social media management,
                  paid advertising, video production, and business strategy
                  consulting.
                </P>
                <P>
                  For questions about this Privacy Policy or to exercise your
                  data rights, contact us at:
                </P>
                <UL>
                  <LI>Email: contact@krieto.co</LI>
                  <LI>Website: krieto.co/contact</LI>
                </UL>
              </div>

              {/* 2 */}
              <div>
                <H2
                  id="information-we-collect"
                  number="2"
                  title="Information We Collect"
                />

                <H3>2.1 Information You Provide Directly</H3>
                <P>
                  We collect personal information you voluntarily provide
                  when you:
                </P>
                <UL>
                  <LI>Complete and submit our website contact form</LI>
                  <LI>Send us an email or message via WhatsApp Business</LI>
                  <LI>Engage with us for a project proposal or service inquiry</LI>
                  <LI>Sign a service agreement or client contract</LI>
                  <LI>Communicate with us through social media platforms</LI>
                </UL>
                <P>The categories of personal information collected may include:</P>
                <UL>
                  <LI>Full name</LI>
                  <LI>Email address</LI>
                  <LI>Phone number</LI>
                  <LI>Company name and business type</LI>
                  <LI>Service requirements and project details</LI>
                  <LI>Budget ranges you voluntarily disclose</LI>
                  <LI>Any other information you choose to share in communications</LI>
                </UL>

                <H3>2.2 Information Collected Automatically</H3>
                <P>
                  When you visit krieto.co, we and our third-party service
                  providers may automatically collect certain technical
                  information, including:
                </P>
                <UL>
                  <LI>IP address and approximate geographic location (country, city)</LI>
                  <LI>Browser type and version</LI>
                  <LI>Operating system and device type</LI>
                  <LI>Pages visited and time spent on each page</LI>
                  <LI>Referring URLs (the page you came from before visiting our site)</LI>
                  <LI>Date and time of your visit</LI>
                  <LI>Clicks and interactions with website elements</LI>
                </UL>

                <H3>2.3 Cookies and Similar Technologies</H3>
                <P>
                  Our website may use cookies and similar tracking
                  technologies. A cookie is a small data file placed on your
                  device. We use:
                </P>
                <UL>
                  <LI>
                    <span className="text-slate-300">Essential cookies:</span>{" "}
                    Required for the website to function. Cannot be disabled.
                  </LI>
                  <LI>
                    <span className="text-slate-300">Analytics cookies:</span>{" "}
                    Used to understand how visitors use our site (e.g.,
                    Google Analytics). These may be disabled.
                  </LI>
                  <LI>
                    <span className="text-slate-300">Preference cookies:</span>{" "}
                    Remember your settings and preferences.
                  </LI>
                </UL>
                <P>
                  You may control cookies through your browser settings.
                  Disabling cookies may affect website functionality. We
                  honor the Global Privacy Control (GPC) signal as required
                  under the Texas Data Privacy and Security Act (TDPSA) and
                  applicable state laws. When your browser sends a GPC
                  signal, we treat it as a valid opt-out request for any
                  sale or sharing of personal data for targeted advertising
                  purposes.
                </P>

                <H3>2.4 Information from Third Parties</H3>
                <P>
                  We may receive limited information about you from
                  third-party sources including:
                </P>
                <UL>
                  <LI>
                    Social media platforms (LinkedIn, Instagram, Facebook,
                    X/Twitter) when you interact with our business profiles
                  </LI>
                  <LI>
                    Analytics providers (such as Google Analytics or
                    Microsoft Clarity) that help us understand website
                    traffic
                  </LI>
                  <LI>
                    WhatsApp Business platform when you initiate contact
                    through our WhatsApp number
                  </LI>
                </UL>
              </div>

              {/* 3 */}
              <div>
                <H2
                  id="how-we-use-your-information"
                  number="3"
                  title="How We Use Your Information"
                />
                <P>
                  We use the personal information we collect for the
                  following purposes:
                </P>
                <UL>
                  <LI>To respond to your inquiries, questions, and contact form submissions</LI>
                  <LI>To provide, manage, and deliver our advertising, design, and marketing services</LI>
                  <LI>To prepare proposals, quotes, and service agreements</LI>
                  <LI>To communicate about your project, including status updates and deliverables</LI>
                  <LI>To send administrative communications (invoices, receipts, payment reminders)</LI>
                  <LI>To improve our website, services, and business operations</LI>
                  <LI>To comply with legal obligations including tax, accounting, and regulatory requirements</LI>
                  <LI>To protect our legal rights and prevent fraud or misuse of our services</LI>
                  <LI>To analyze website usage and improve user experience</LI>
                </UL>
                <P>
                  We do not use your personal information for automated
                  decision-making or profiling that produces legal or
                  similarly significant effects without your explicit
                  consent. We do not sell your personal information to third
                  parties for monetary compensation.
                </P>
              </div>

              {/* 4 */}
              <div>
                <H2 id="legal-basis" number="4" title="Legal Basis for Processing" />
                <P>
                  Where applicable law requires a legal basis for processing
                  personal data, we rely on the following:
                </P>
                <UL>
                  <LI>
                    <span className="text-slate-300">Contract performance:</span>{" "}
                    Processing necessary to fulfill our service agreement
                    with you
                  </LI>
                  <LI>
                    <span className="text-slate-300">Legitimate interests:</span>{" "}
                    Improving our services, website analytics, business
                    communications, and fraud prevention
                  </LI>
                  <LI>
                    <span className="text-slate-300">Legal obligation:</span>{" "}
                    Compliance with applicable laws including tax, accounting,
                    and regulatory requirements
                  </LI>
                  <LI>
                    <span className="text-slate-300">Consent:</span> Where we
                    have requested and received your explicit consent for
                    specific processing activities
                  </LI>
                </UL>
              </div>

              {/* 5 */}
              <div>
                <H2 id="how-we-share" number="5" title="How We Share Your Information" />
                <P>
                  We do not sell, rent, or trade your personal information.
                  We may share your information in the following limited
                  circumstances:
                </P>

                <H3>5.1 Service Providers</H3>
                <P>
                  We work with trusted third-party vendors who assist us in
                  operating our business and delivering services. These
                  providers are contractually obligated to protect your data
                  and may only use it for the specific purposes we
                  authorize. Current categories of service providers
                  include:
                </P>
                <UL>
                  <LI>Website hosting and infrastructure providers</LI>
                  <LI>Email communication platforms</LI>
                  <LI>Analytics services (Google Analytics, Microsoft Clarity)</LI>
                  <LI>Payment processing services (when applicable)</LI>
                  <LI>Project management and collaboration tools</LI>
                  <LI>Cloud storage providers</LI>
                  <LI>WhatsApp Business platform (Meta Platforms Ireland Ltd.)</LI>
                </UL>

                <H3>5.2 Legal Requirements</H3>
                <P>
                  We may disclose your personal information if required by
                  law, court order, government authority, or if we believe in
                  good faith that disclosure is necessary to:
                </P>
                <UL>
                  <LI>Comply with applicable law or legal process</LI>
                  <LI>
                    Protect the rights, property, or safety of Fenomenon
                    Creative LLC d/b/a Krieto, our clients, or others
                  </LI>
                  <LI>Investigate or prevent fraud, security breaches, or illegal activity</LI>
                  <LI>Enforce our Terms of Service or other agreements</LI>
                </UL>

                <H3>5.3 Business Transfers</H3>
                <P>
                  In the event of a merger, acquisition, reorganization,
                  bankruptcy, or sale of all or substantially all of our
                  assets, your personal information may be transferred to
                  the acquiring entity. We will notify you of such a
                  transfer and any material changes to this Privacy Policy.
                </P>

                <H3>5.4 With Your Consent</H3>
                <P>
                  We may share your information with third parties when you
                  have given us explicit consent to do so, including for
                  client testimonial or case study purposes.
                </P>
              </div>

              {/* 6 */}
              <div>
                <H2 id="your-rights" number="6" title="Your Privacy Rights" />
                <P>
                  Depending on your location, you may have certain rights
                  regarding your personal information. Fenomenon Creative
                  LLC d/b/a Krieto respects and honors these rights to the
                  fullest extent required by applicable law.
                </P>

                <H3>6.1 Rights Under the Texas Data Privacy and Security Act (TDPSA)</H3>
                <P>If you are a Texas resident, you have the following rights:</P>
                <UL>
                  <LI>
                    <span className="text-slate-300">Right to Know:</span>{" "}
                    Confirm whether we are processing your personal data and
                    access a copy of it
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Correct:</span>{" "}
                    Request correction of inaccurate personal data
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Delete:</span>{" "}
                    Request deletion of your personal data, subject to
                    certain exceptions
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Data Portability:</span>{" "}
                    Obtain a portable copy of your personal data in a usable
                    format
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Opt Out:</span>{" "}
                    Opt out of the processing of your personal data for
                    targeted advertising, sale, or profiling for decisions
                    that produce legal or similarly significant effects
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Non-Discrimination:</span>{" "}
                    We will not discriminate against you for exercising your
                    privacy rights
                  </LI>
                </UL>

                <H3>6.2 Rights Under California Law (CCPA/CPRA)</H3>
                <P>If you are a California resident, you have additional rights including:</P>
                <UL>
                  <LI>
                    <span className="text-slate-300">Right to Know:</span> Know
                    what personal information we collect, use, disclose, and
                    sell
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Delete:</span>{" "}
                    Request deletion of personal information we have
                    collected
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Correct:</span>{" "}
                    Request correction of inaccurate personal information
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Opt Out:</span>{" "}
                    Opt out of the sale or sharing of personal information
                  </LI>
                  <LI>
                    <span className="text-slate-300">
                      Right to Limit Use of Sensitive Personal Information:
                    </span>{" "}
                    Limit how we use or disclose sensitive personal
                    information
                  </LI>
                  <LI>
                    <span className="text-slate-300">Right to Non-Discrimination:</span>{" "}
                    Equal service and price regardless of exercising privacy
                    rights
                  </LI>
                </UL>

                <H3>6.3 Rights Under GDPR (EU/UK Residents)</H3>
                <P>
                  If you are located in the European Union, United Kingdom,
                  or other jurisdictions covered by GDPR, you have the right
                  to:
                </P>
                <UL>
                  <LI>Access your personal data</LI>
                  <LI>Rectify inaccurate personal data</LI>
                  <LI>Erase personal data (&ldquo;right to be forgotten&rdquo;) under certain circumstances</LI>
                  <LI>Restrict processing of your personal data</LI>
                  <LI>Data portability</LI>
                  <LI>Object to processing</LI>
                  <LI>Withdraw consent at any time where processing is based on consent</LI>
                  <LI>Lodge a complaint with your local supervisory authority</LI>
                </UL>

                <H3>6.4 How to Exercise Your Rights</H3>
                <P>To exercise any of the rights described above, please contact us:</P>
                <UL>
                  <LI>Email: contact@krieto.co</LI>
                  <LI>Website form: krieto.co/contact</LI>
                </UL>
                <P>
                  We will respond to verified requests within 45 days. We
                  may extend this period by an additional 45 days where
                  reasonably necessary, and we will notify you of any such
                  extension within the initial 45-day period. We will
                  respond to your request free of charge for up to two
                  requests per year. We may decline requests that are
                  manifestly unfounded, excessive, or repetitive.
                </P>
                <P>
                  To protect your privacy and security, we may need to
                  verify your identity before processing your request. We
                  will use reasonable verification measures proportionate to
                  the sensitivity of the information requested.
                </P>
              </div>

              {/* 7 */}
              <div>
                <H2 id="data-retention" number="7" title="Data Retention" />
                <P>
                  We retain personal information for as long as necessary to
                  fulfill the purposes described in this Privacy Policy, to
                  provide our services, and to comply with our legal
                  obligations. Our general retention guidelines:
                </P>

                <div className="mt-6 overflow-hidden overflow-x-auto rounded-[16px] border border-white/10">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="px-5 py-4 font-medium text-slate-300">
                          Category of Data
                        </th>
                        <th className="px-5 py-4 font-medium text-slate-300">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {retentionTable.map((row, index) => (
                        <tr
                          key={row.category}
                          className={
                            index !== retentionTable.length - 1
                              ? "border-b border-white/10"
                              : ""
                          }
                        >
                          <td className="px-5 py-4 align-top text-slate-300">
                            {row.category}
                          </td>
                          <td className="px-5 py-4 align-top text-slate-400">
                            {row.period}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <P>
                  When personal data is no longer needed and no legal
                  obligation requires retention, we securely delete or
                  anonymise it.
                </P>
              </div>

              {/* 8 */}
              <div>
                <H2 id="data-security" number="8" title="Data Security" />
                <P>
                  We implement reasonable and appropriate technical and
                  organisational security measures to protect your personal
                  information against unauthorised access, disclosure,
                  alteration, or destruction. Our security practices
                  include:
                </P>
                <UL>
                  <LI>Encrypted data transmission via HTTPS/SSL on all pages of krieto.co</LI>
                  <LI>Access controls limiting personal data access to authorised personnel only</LI>
                  <LI>Use of reputable and security-certified third-party service providers</LI>
                  <LI>Regular review of our data handling practices and security measures</LI>
                  <LI>Secure password management and authentication practices</LI>
                </UL>
                <P>
                  No method of internet transmission or electronic storage
                  is 100% secure. While we take commercially reasonable
                  steps to protect your personal information, we cannot
                  guarantee absolute security. In the event of a data breach
                  that poses a risk to your rights and freedoms, we will
                  notify you and relevant authorities as required by
                  applicable law.
                </P>
              </div>

              {/* 9 */}
              <div>
                <H2
                  id="third-party-sites"
                  number="9"
                  title="Third-Party Websites and Links"
                />
                <P>
                  Our website may contain links to third-party websites,
                  social media platforms, and other external resources. This
                  Privacy Policy applies only to krieto.co and does not
                  cover the privacy practices of any third-party sites. We
                  encourage you to review the privacy policies of any
                  third-party websites you visit. We are not responsible for
                  the content, privacy practices, or data handling of any
                  third-party site.
                </P>
              </div>

              {/* 10 */}
              <div>
                <H2 id="childrens-privacy" number="10" title="Children's Privacy" />
                <P>
                  Our website and services are not directed to individuals
                  under the age of 18. We do not knowingly collect personal
                  information from children. If we become aware that we
                  have collected personal information from a person under
                  18, we will take steps to delete that information
                  promptly. If you believe we may have inadvertently
                  collected information from a minor, please contact us
                  immediately at contact@krieto.co.
                </P>
              </div>

              {/* 11 */}
              <div>
                <H2
                  id="international-transfers"
                  number="11"
                  title="International Data Transfers"
                />
                <P>
                  Fenomenon Creative LLC d/b/a Krieto is based in Texas,
                  United States. If you are accessing our website from
                  outside the United States, please be aware that your
                  information may be transferred to, stored, and processed
                  in the United States where our servers are located and
                  our central database is operated. The data protection laws
                  in the United States may differ from those in your
                  country.
                </P>
                <P>
                  For users in the European Union or United Kingdom, we
                  implement appropriate safeguards for any international
                  data transfers as required by GDPR, including Standard
                  Contractual Clauses (SCCs) where applicable.
                </P>
              </div>

              {/* 12 */}
              <div>
                <H2 id="gpc" number="12" title="Global Privacy Control (GPC) and Opt-Out Signals" />
                <P>
                  In compliance with the Texas Data Privacy and Security Act
                  (TDPSA) and laws in ten additional US states (California,
                  Colorado, Connecticut, Delaware, Maryland, Minnesota,
                  Montana, New Hampshire, New Jersey, and Oregon), we
                  recognise and honour the Global Privacy Control (GPC)
                  signal.
                </P>
                <P>
                  If your browser or device sends a GPC signal when you
                  visit krieto.co, we will treat this as a valid request to
                  opt out of any sale or sharing of your personal data for
                  targeted advertising purposes. We process this signal
                  automatically. No separate opt-out action is required from
                  you.
                </P>
              </div>

              {/* 13 */}
              <div>
                <H2 id="changes" number="13" title="Changes to This Privacy Policy" />
                <P>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices, technology, legal
                  requirements, or for other operational reasons. When we
                  make material changes, we will:
                </P>
                <UL>
                  <LI>Update the &ldquo;Last Updated&rdquo; date at the top of this Privacy Policy</LI>
                  <LI>Post the revised Privacy Policy on krieto.co</LI>
                  <LI>
                    Where required by law or where we deem it appropriate,
                    notify you by email or through a prominent notice on our
                    website
                  </LI>
                </UL>
                <P>
                  Your continued use of our website after any changes
                  constitutes your acceptance of the updated Privacy Policy.
                  We encourage you to review this page periodically.
                </P>
              </div>

              {/* 14 */}
              <div className="rounded-[20px] border border-white/10 bg-[#0A0F1A] p-6 sm:p-8">
                <H2 id="contact" number="14" title="Contact Us — Privacy Matters" />
                <P>
                  For any questions, concerns, or requests related to this
                  Privacy Policy or your personal data, please contact:
                </P>
                <UL>
                  <LI>Fenomenon Creative LLC d/b/a Krieto</LI>
                  <LI>Email: contact@krieto.co</LI>
                  <LI>Website: krieto.co/contact</LI>
                </UL>
                <P>
                  We are committed to resolving privacy-related concerns
                  promptly and transparently.
                </P>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#90E0EF] hover:text-[#050810]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default PrivacyPolicy;