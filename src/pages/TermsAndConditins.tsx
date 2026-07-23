/**
 * TERMS OF SERVICE PAGE
 * --------------------------------------------------------------
 * Route suggestion: /terms-of-service
 *
 * Same design system as PrivacyPolicy.tsx: sidebar TOC + reading column,
 * quiet motion, Fraunces headings. One addition here: a `Callout`
 * component for the ALL-CAPS disclaimer/liability sections (8, 9, 13.4)
 * in your source document. Those are written in caps in the original
 * because conspicuous disclaimer language often carries legal weight —
 * so instead of just rendering ALL CAPS text (hard to read, looks like
 * shouting), they get a bordered callout box that visually signals
 * "this is a legally load-bearing section" while staying legible.
 *
 * Requires the same font-display (Fraunces) setup as the other pages.
 * --------------------------------------------------------------
 */

import Section, { Container } from "@/components/global/Section";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "agreement-to-terms", number: "1", title: "Agreement to Terms" },
  { id: "our-services", number: "2", title: "Our Services" },
  { id: "client-engagements", number: "3", title: "Client Engagements and Service Agreements" },
  { id: "fees-payment-billing", number: "4", title: "Fees, Payment, and Billing" },
  { id: "intellectual-property", number: "5", title: "Intellectual Property" },
  { id: "confidentiality", number: "6", title: "Confidentiality" },
  { id: "term-and-termination", number: "7", title: "Term and Termination" },
  { id: "disclaimer-of-warranties", number: "8", title: "Disclaimer of Warranties" },
  { id: "limitation-of-liability", number: "9", title: "Limitation of Liability" },
  { id: "indemnification", number: "10", title: "Indemnification" },
  { id: "third-party-platforms", number: "11", title: "Third-Party Platforms and Services" },
  { id: "prohibited-uses", number: "12", title: "Prohibited Uses" },
  { id: "governing-law", number: "13", title: "Governing Law and Dispute Resolution" },
  { id: "miscellaneous", number: "14", title: "Miscellaneous Provisions" },
  { id: "changes-to-terms", number: "15", title: "Changes to These Terms" },
  { id: "contact-information", number: "16", title: "Contact Information" },
];

// Local building blocks — mirrors PrivacyPolicy.tsx so both pages read as one system.
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

// For the ALL-CAPS legal notice sections — visually flagged, not shouted in caps.
const Callout = ({ children }: { children: ReactNode }) => (
  <div className="mt-4 rounded-[16px] border border-[#00B4D8]/25 bg-[#00B4D8]/[0.04] p-5 sm:p-6">
    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#90E0EF]">
      Important legal notice
    </p>
    <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">{children}</div>
  </div>
);

const TermsOfService = () => {
  return (
    <main className="bg-[#050810] text-white">
      {/* ---------------------------------------------------------------- */}
      {/* HEADER                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#90E0EF]">
            Legal
          </p>
          <h1 className="mt-5 font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
            <p>Fenomenon Creative LLC d/b/a Krieto</p>
            <p>Effective: July 8, 2026</p>
            <p>Last Updated: July 8, 2026</p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Please read these Terms of Service carefully before using this
            website or engaging Krieto for any services. By accessing
            krieto.co or submitting an inquiry, you agree to be bound by
            these Terms. If you do not agree, do not use this website or
            our services.
          </p>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BODY                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            <nav aria-label="Table of contents" className="lg:sticky lg:top-24 lg:h-fit">
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

            <div className="max-w-3xl space-y-16">
              {/* 1 */}
              <div>
                <H2 id="agreement-to-terms" number="1" title="Agreement to Terms" />
                <P>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a
                  legally binding agreement between you (&ldquo;User,&rdquo;
                  &ldquo;Client,&rdquo; or &ldquo;you&rdquo;) and Fenomenon
                  Creative LLC, a Texas limited liability company doing
                  business as Krieto (&ldquo;Krieto,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your use
                  of the website krieto.co (the &ldquo;Website&rdquo;) and
                  any services we provide to you (the &ldquo;Services&rdquo;).
                </P>
                <P>
                  By accessing or using our Website, submitting a contact
                  form, engaging us for services, or signing a service
                  agreement, you confirm that:
                </P>
                <UL>
                  <LI>You are at least 18 years of age</LI>
                  <LI>You have the legal capacity and authority to enter into this agreement</LI>
                  <LI>If acting on behalf of a business, you have the authority to bind that business to these Terms</LI>
                  <LI>You have read, understood, and agree to be bound by these Terms and our Privacy Policy</LI>
                </UL>
              </div>

              {/* 2 */}
              <div>
                <H2 id="our-services" number="2" title="Our Services" />

                <H3>2.1 Description of Services</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto provides full-service
                  advertising, design, and marketing services including but
                  not limited to:
                </P>
                <UL>
                  <LI>Brand identity design (logos, brand guidelines, visual identity)</LI>
                  <LI>Web development and e-commerce design</LI>
                  <LI>Digital marketing (social media management, SEO, email marketing, content creation)</LI>
                  <LI>Paid advertising campaign management (Meta Ads, Google Ads)</LI>
                  <LI>Digital advertising and video production (AI video, animated ads, photography, videography)</LI>
                  <LI>Reputation management and local SEO</LI>
                  <LI>Growth analytics and performance reporting</LI>
                  <LI>Business strategy and consulting</LI>
                  <LI>AI-powered marketing solutions</LI>
                </UL>

                <H3>2.2 Website Use</H3>
                <P>
                  The Website is provided for informational purposes and to
                  facilitate inquiries about our services. You agree to use
                  the Website only for lawful purposes and in a manner
                  consistent with these Terms.
                </P>

                <H3>2.3 No Guarantee of Results</H3>
                <P>
                  While we apply our best professional expertise and effort
                  to every engagement, Fenomenon Creative LLC d/b/a Krieto
                  does not guarantee specific results, revenue outcomes,
                  follower counts, ranking positions, conversion rates, or
                  any other specific marketing metrics. Marketing and
                  advertising results depend on many factors outside our
                  control including market conditions, platform algorithm
                  changes, client-provided content quality, budget levels,
                  competitive landscape, and client cooperation. Any
                  projections, estimates, or expected outcomes discussed
                  during our sales process are illustrative only and do not
                  constitute a guarantee or warranty.
                </P>
                <Callout>
                  <p>
                    Results discussed in our portfolio, case studies, or
                    marketing materials reflect specific past client
                    outcomes under specific conditions and are not a
                    guarantee or representation that you will achieve the
                    same or similar results.
                  </p>
                </Callout>
              </div>

              {/* 3 */}
              <div>
                <H2
                  id="client-engagements"
                  number="3"
                  title="Client Engagements and Service Agreements"
                />

                <H3>3.1 Service Proposals and Agreements</H3>
                <P>
                  Detailed service engagements are governed by a separate
                  written Service Agreement or Statement of Work signed
                  between Fenomenon Creative LLC d/b/a Krieto and the
                  client. These Terms apply to all engagements in addition
                  to any Service Agreement. In the event of a conflict
                  between these Terms and a signed Service Agreement, the
                  Service Agreement prevails on matters specifically
                  addressed therein.
                </P>

                <H3>3.2 Client Responsibilities</H3>
                <P>
                  To enable us to deliver our services effectively, clients
                  agree to:
                </P>
                <UL>
                  <LI>Provide accurate, complete, and timely information, materials, and approvals required for the project</LI>
                  <LI>Respond to requests for feedback, approval, or information within agreed timeframes</LI>
                  <LI>
                    Ensure all materials, content, logos, images, and other
                    assets provided to Fenomenon Creative LLC d/b/a Krieto
                    are legally owned by or licensed to the client, and do
                    not infringe any third-party intellectual property
                    rights
                  </LI>
                  <LI>Comply with the terms of any third-party platforms used in delivering services (Meta, Google, etc.)</LI>
                  <LI>Maintain sole responsibility for the legal compliance of all advertising content, claims, and promotions you approve for publication</LI>
                  <LI>Designate an authorized representative with authority to provide approvals and instructions</LI>
                </UL>

                <H3>3.3 Approvals and Revisions</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto will present
                  deliverables for client review and approval. The number of
                  revision rounds included is specified in the relevant
                  Service Agreement. Revisions beyond the agreed scope may
                  incur additional charges. Client approval of a deliverable
                  constitutes acceptance of that deliverable. Fenomenon
                  Creative LLC d/b/a Krieto is not responsible for errors or
                  omissions in approved materials that are later identified
                  after client sign-off.
                </P>

                <H3>3.4 Timelines and Delays</H3>
                <P>
                  Project timelines are agreed in the Service Agreement.
                  Fenomenon Creative LLC d/b/a Krieto is not responsible for
                  delays caused by:
                </P>
                <UL>
                  <LI>Late provision of required client materials, assets, or approvals</LI>
                  <LI>Client-requested changes to scope or direction after project commencement</LI>
                  <LI>Force majeure events outside our reasonable control</LI>
                  <LI>Third-party platform outages, policy changes, or technical issues</LI>
                  <LI>Delays in payment that put a project on hold</LI>
                </UL>
                <P>We will communicate proactively about any delays on our side.</P>
              </div>

              {/* 4 */}
              <div>
                <H2 id="fees-payment-billing" number="4" title="Fees, Payment, and Billing" />

                <H3>4.1 Fees</H3>
                <P>
                  All fees for services are set out in the applicable
                  Service Agreement or invoice. Quoted fees are in United
                  States Dollars (USD) unless otherwise stated. Fees may be
                  structured as:
                </P>
                <UL>
                  <LI>Fixed project fees</LI>
                  <LI>Monthly retainer fees</LI>
                  <LI>Hourly rates for consulting or additional work</LI>
                  <LI>Performance-based components where specifically agreed in writing</LI>
                </UL>

                <H3>4.2 Payment Terms</H3>
                <P>Unless otherwise agreed in writing:</P>
                <UL>
                  <LI>Project fees: 50% deposit required before work commences; balance due upon project completion</LI>
                  <LI>Monthly retainers: Due in advance on the first business day of each month</LI>
                  <LI>Ad spend and third-party costs: Billed separately and must be funded in advance</LI>
                  <LI>Additional work beyond agreed scope: Invoiced monthly in arrears</LI>
                </UL>

                <H3>4.3 Late Payment</H3>
                <P>
                  Invoices not paid within 14 days of the due date may incur
                  a late fee of 1.5% per month (18% per annum) on the
                  outstanding balance, or the maximum rate permitted by
                  Texas law, whichever is lower. Fenomenon Creative LLC
                  d/b/a Krieto reserves the right to suspend services on
                  accounts with outstanding unpaid invoices until payment is
                  received. Suspension of services due to non-payment does
                  not entitle the client to a refund for pre-paid periods.
                </P>

                <H3>4.4 Taxes</H3>
                <P>
                  You are responsible for all applicable taxes, duties, or
                  levies on fees charged by Fenomenon Creative LLC d/b/a
                  Krieto. Where Fenomenon Creative LLC d/b/a Krieto is
                  required by law to collect sales tax or other taxes, these
                  will be added to the invoice and must be paid in full.
                </P>

                <H3>4.5 Refunds</H3>
                <P>All fees paid are non-refundable except:</P>
                <UL>
                  <LI>Where Fenomenon Creative LLC d/b/a Krieto terminates a project without cause</LI>
                  <LI>Where services have not yet commenced and cancellation is made within 3 business days of contract execution</LI>
                  <LI>As explicitly stated in a written Service Agreement</LI>
                </UL>
                <P>Partially completed work is not eligible for refund.</P>

                <H3>4.6 Ad Spend and Third-Party Platform Costs</H3>
                <P>
                  Any advertising spend placed on third-party platforms
                  (including but not limited to Meta Ads, Google Ads) is the
                  direct financial obligation of the client. Fenomenon
                  Creative LLC d/b/a Krieto manages such spend on behalf of
                  the client but is not responsible for platform billing
                  errors, unauthorised charges, or results achieved with
                  that spend. Clients must maintain valid billing
                  information with all advertising platforms.
                </P>
              </div>

              {/* 5 */}
              <div>
                <H2 id="intellectual-property" number="5" title="Intellectual Property" />

                <H3>5.1 Fenomenon Creative LLC d/b/a Krieto Intellectual Property</H3>
                <P>
                  All content on krieto.co including but not limited to
                  text, graphics, logos, images, design elements, software,
                  and compilations is the property of Fenomenon Creative LLC
                  d/b/a Krieto or its licensors and is protected by United
                  States and international copyright, trademark, and other
                  intellectual property laws. You may not reproduce,
                  distribute, modify, display, or create derivative works
                  from any content on our Website without prior written
                  consent.
                </P>

                <H3>5.2 Client Ownership of Deliverables</H3>
                <P>
                  Upon receipt of full payment for a project, Fenomenon
                  Creative LLC d/b/a Krieto assigns to the client all
                  rights, title, and interest in the final deliverables
                  created specifically for that project, including all
                  intellectual property rights therein, except as noted
                  below.
                </P>

                <H3>5.3 Fenomenon Creative LLC d/b/a Krieto Retained Rights</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto retains the following
                  rights regardless of payment:
                </P>
                <UL>
                  <LI>All rights to tools, templates, frameworks, methodologies, processes, and pre-existing materials used in delivering services (&ldquo;Background IP&rdquo;)</LI>
                  <LI>The right to display completed work in our portfolio, website, social media, and marketing materials unless the client provides a written request for confidentiality before project commencement</LI>
                  <LI>All rights to design concepts, drafts, and rejected alternatives not selected by the client</LI>
                  <LI>Rights to any generic stock assets, licensed fonts, or third-party materials incorporated into deliverables (the client receives a licence to use these within the deliverable only)</LI>
                </UL>

                <H3>5.4 Client-Provided Materials</H3>
                <P>
                  The client retains all rights to materials, assets,
                  logos, content, and intellectual property provided to
                  Fenomenon Creative LLC d/b/a Krieto for the purpose of
                  delivering services. By providing these materials, the
                  client grants Fenomenon Creative LLC d/b/a Krieto a
                  non-exclusive, royalty-free licence to use them solely for
                  the purpose of delivering the agreed services. The client
                  warrants that they have the legal right to provide these
                  materials and that their use by Fenomenon Creative LLC
                  d/b/a Krieto does not infringe any third-party rights.
                </P>

                <H3>5.5 Portfolio and Case Study Rights</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto reserves the right to
                  display completed client projects in our portfolio and
                  use project outcomes for marketing purposes. If you
                  require confidentiality, you must notify us in writing
                  before project commencement. We will honour reasonable
                  confidentiality requests.
                </P>
              </div>

              {/* 6 */}
              <div>
                <H2 id="confidentiality" number="6" title="Confidentiality" />
                <P>
                  Each party acknowledges that in the course of the
                  business relationship, they may receive or have access to
                  confidential information of the other party, including but
                  not limited to business strategies, financial information,
                  client lists, marketing plans, technical data, and
                  project details (&ldquo;Confidential Information&rdquo;).
                  Each party agrees to:
                </P>
                <UL>
                  <LI>Hold all Confidential Information in strict confidence</LI>
                  <LI>Not disclose Confidential Information to any third party without prior written consent</LI>
                  <LI>Use Confidential Information only for the purposes of the business relationship</LI>
                  <LI>Protect Confidential Information using at least the same degree of care used to protect their own confidential information, but no less than reasonable care</LI>
                </UL>
                <P>These obligations do not apply to information that:</P>
                <UL>
                  <LI>Is or becomes publicly available through no fault of the receiving party</LI>
                  <LI>Was independently developed by the receiving party without use of Confidential Information</LI>
                  <LI>Was rightfully received from a third party without restriction</LI>
                  <LI>Is required to be disclosed by law, court order, or governmental authority (with prompt prior notice to the other party where legally permissible)</LI>
                </UL>
                <P>
                  Confidentiality obligations survive the termination of the
                  business relationship for a period of three (3) years.
                </P>
              </div>

              {/* 7 */}
              <div>
                <H2 id="term-and-termination" number="7" title="Term and Termination" />

                <H3>7.1 Term</H3>
                <P>
                  These Terms remain in effect for as long as you use our
                  Website or we provide services to you. Individual service
                  engagements are governed by the term specified in the
                  applicable Service Agreement.
                </P>

                <H3>7.2 Termination by Client</H3>
                <P>
                  You may terminate a service engagement by providing
                  written notice as specified in your Service Agreement.
                  Unless otherwise agreed:
                </P>
                <UL>
                  <LI>30 days written notice is required to terminate a monthly retainer arrangement</LI>
                  <LI>Project-based engagements may not be terminated without paying for all work completed to the termination date plus 30% of the remaining project value as a cancellation fee</LI>
                </UL>

                <H3>7.3 Termination by Fenomenon Creative LLC d/b/a Krieto</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto reserves the right to
                  terminate or suspend services to any client immediately
                  and without penalty in the event that:
                </P>
                <UL>
                  <LI>Payment is overdue by more than 14 days despite written notice</LI>
                  <LI>The client requests services that violate applicable laws or platform policies</LI>
                  <LI>The client engages in abusive, threatening, or harassing behaviour toward Fenomenon Creative LLC d/b/a Krieto personnel</LI>
                  <LI>The client provides materially false information in connection with their engagement</LI>
                  <LI>Continuing the engagement would require Fenomenon Creative LLC d/b/a Krieto to engage in illegal or unethical activity</LI>
                </UL>

                <H3>7.4 Effect of Termination</H3>
                <P>Upon termination:</P>
                <UL>
                  <LI>All outstanding fees for work completed become immediately due and payable</LI>
                  <LI>Fenomenon Creative LLC d/b/a Krieto will provide the client with all completed work product for which payment has been received</LI>
                  <LI>Each party will return or certifiably destroy Confidential Information of the other party upon request</LI>
                  <LI>Provisions of these Terms that by their nature should survive termination will survive, including sections on Intellectual Property, Confidentiality, Limitation of Liability, Indemnification, and Governing Law</LI>
                </UL>
              </div>

              {/* 8 — original ALL-CAPS section, rendered as a Callout */}
              <div>
                <H2 id="disclaimer-of-warranties" number="8" title="Disclaimer of Warranties" />
                <Callout>
                  <p>
                    To the fullest extent permitted by applicable law: the
                    Website and Services are provided on an &ldquo;as
                    is&rdquo; and &ldquo;as available&rdquo; basis without
                    warranties of any kind, either express or implied,
                    including but not limited to implied warranties of
                    merchantability, fitness for a particular purpose,
                    title, and noninfringement.
                  </p>
                  <p>Krieto LLC does not warrant that:</p>
                  <ul className="space-y-2">
                    <li>— The Website will be uninterrupted, error-free, or secure</li>
                    <li>— Any defects or errors will be corrected</li>
                    <li>— The Website is free of viruses or other harmful components</li>
                    <li>— Any specific marketing, advertising, or business results will be achieved</li>
                    <li>— The accuracy, completeness, or timeliness of any content on the Website</li>
                  </ul>
                </Callout>
              </div>

              {/* 9 — original ALL-CAPS section, rendered as a Callout */}
              <div>
                <H2 id="limitation-of-liability" number="9" title="Limitation of Liability" />
                <Callout>
                  <p>
                    To the maximum extent permitted by applicable law,
                    Fenomenon Creative LLC d/b/a Krieto and its members,
                    managers, employees, agents, and contractors shall not
                    be liable for:
                  </p>
                  <ul className="space-y-2">
                    <li>— Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>— Loss of profits, revenue, data, goodwill, or business opportunities</li>
                    <li>— Damages arising from reliance on information provided on the Website</li>
                    <li>— Any failure or delay in performance due to causes beyond our reasonable control</li>
                    <li>— Third-party platform actions including account suspension, policy changes, or algorithm updates by Meta, Google, or other platforms</li>
                  </ul>
                  <p>
                    In no event shall Fenomenon Creative LLC d/b/a
                    Krieto&rsquo;s total cumulative liability to you for all
                    claims arising out of or related to these Terms or our
                    Services exceed the greater of:
                  </p>
                  <ul className="space-y-2">
                    <li>— The total fees paid by you to Krieto LLC in the three (3) months immediately preceding the event giving rise to the claim, or</li>
                    <li>— One hundred US dollars ($100.00)</li>
                  </ul>
                </Callout>
                <P>
                  Some jurisdictions do not allow the exclusion or
                  limitation of certain warranties or liability. In such
                  jurisdictions, Fenomenon Creative LLC d/b/a Krieto&rsquo;s
                  liability is limited to the maximum extent permitted by
                  law.
                </P>
              </div>

              {/* 10 */}
              <div>
                <H2 id="indemnification" number="10" title="Indemnification" />
                <P>
                  You agree to defend, indemnify, and hold harmless
                  Fenomenon Creative LLC d/b/a Krieto and its members,
                  managers, officers, employees, agents, licensors, and
                  service providers from and against any claims,
                  liabilities, damages, judgments, awards, losses, costs,
                  expenses, and fees (including reasonable attorneys&rsquo;
                  fees) arising out of or relating to:
                </P>
                <UL>
                  <LI>Your violation of these Terms</LI>
                  <LI>Your use of the Website or our Services</LI>
                  <LI>Any content, materials, or information you provide to Fenomenon Creative LLC d/b/a Krieto</LI>
                  <LI>Your violation of any applicable law or regulation</LI>
                  <LI>Your infringement of any third-party intellectual property rights</LI>
                  <LI>Any claims by third parties relating to advertising content you approved for publication</LI>
                  <LI>Any claims arising from your failure to obtain necessary permits, licences, or regulatory approvals for your business or advertising activities</LI>
                </UL>
              </div>

              {/* 11 */}
              <div>
                <H2 id="third-party-platforms" number="11" title="Third-Party Platforms and Services" />
                <P>
                  Our services may involve the use of third-party platforms
                  including Meta (Facebook and Instagram), Google, LinkedIn,
                  TikTok, X (Twitter), WhatsApp Business, YouTube, and others
                  (collectively &ldquo;Third-Party Platforms&rdquo;). Use of
                  these platforms is subject to their own terms of service,
                  privacy policies, and community guidelines, which are
                  separate from these Terms.
                </P>
                <P>Fenomenon Creative LLC d/b/a Krieto is not responsible for:</P>
                <UL>
                  <LI>Any changes to Third-Party Platform policies, algorithms, ad policies, or pricing</LI>
                  <LI>Account suspension or restriction by any Third-Party Platform</LI>
                  <LI>Downtime, technical errors, or service interruptions by Third-Party Platforms</LI>
                  <LI>Any actions taken by Third-Party Platforms against client accounts</LI>
                </UL>
                <P>
                  Clients are solely responsible for maintaining compliance
                  with Third-Party Platform terms. We will alert clients to
                  material platform policy changes that affect their
                  campaigns, but ultimate compliance responsibility lies
                  with the client.
                </P>
              </div>

              {/* 12 */}
              <div>
                <H2 id="prohibited-uses" number="12" title="Prohibited Uses" />
                <P>You agree not to use our Website or Services to:</P>
                <UL>
                  <LI>Violate any applicable local, state, national, or international law or regulation</LI>
                  <LI>Promote illegal products, services, or activities</LI>
                  <LI>Create, distribute, or promote content that is defamatory, fraudulent, misleading, obscene, hateful, or harassing</LI>
                  <LI>Infringe any third-party intellectual property, privacy, or other rights</LI>
                  <LI>Engage in any deceptive advertising practices in violation of FTC guidelines or applicable advertising standards</LI>
                  <LI>Scrape, harvest, or collect data from our Website without our written consent</LI>
                  <LI>Attempt to gain unauthorised access to our systems or other users&rsquo; data</LI>
                  <LI>Transmit viruses, malware, or other harmful code</LI>
                  <LI>Engage in spam or unsolicited commercial communications</LI>
                  <LI>Impersonate any person or entity</LI>
                  <LI>Use our Website in any manner that could damage, disable, or impair it</LI>
                </UL>
              </div>

              {/* 13 */}
              <div>
                <H2 id="governing-law" number="13" title="Governing Law and Dispute Resolution" />

                <H3>13.1 Governing Law</H3>
                <P>
                  These Terms and any disputes arising out of or related to
                  them or our Services are governed by and construed in
                  accordance with the laws of the State of Texas, United
                  States of America, without regard to conflict of law
                  principles.
                </P>

                <H3>13.2 Informal Resolution</H3>
                <P>
                  Before initiating formal legal proceedings, you agree to
                  first contact Fenomenon Creative LLC d/b/a Krieto and
                  attempt to resolve any dispute informally by sending
                  written notice of your dispute to contact@krieto.co. We
                  will attempt to resolve the dispute within 30 days of
                  receiving notice. If we cannot resolve the dispute
                  informally, either party may then pursue formal
                  resolution.
                </P>

                <H3>13.3 Dispute Resolution and Arbitration</H3>
                <P>
                  Any dispute, controversy, or claim arising out of or
                  relating to these Terms or our Services that cannot be
                  resolved informally shall be submitted to binding
                  arbitration administered by JAMS (Judicial Arbitration and
                  Mediation Services) or an equivalent arbitration body in
                  Texas, in accordance with its applicable rules. The
                  arbitration shall take place in Texas, and the
                  arbitrator&rsquo;s decision shall be final and binding.
                  Each party shall bear their own costs of arbitration
                  unless the arbitrator determines otherwise.
                </P>
                <P>
                  Nothing in this section prevents either party from
                  seeking emergency injunctive or other equitable relief
                  from a court of competent jurisdiction to prevent
                  irreparable harm pending arbitration.
                </P>

                <H3>13.4 Class Action Waiver</H3>
                <Callout>
                  <p>
                    To the fullest extent permitted by law, you waive your
                    right to participate in a class action lawsuit or
                    class-wide arbitration against Krieto LLC.
                  </p>
                </Callout>

                <H3>13.5 Jurisdiction for Court Proceedings</H3>
                <P>
                  For any matters not subject to arbitration or where
                  injunctive relief is sought, you consent to the exclusive
                  jurisdiction of the state and federal courts located in
                  Texas, United States of America, and waive any objection
                  to such jurisdiction or venue.
                </P>
              </div>

              {/* 14 */}
              <div>
                <H2 id="miscellaneous" number="14" title="Miscellaneous Provisions" />

                <H3>14.1 Entire Agreement</H3>
                <P>
                  These Terms, together with our Privacy Policy and any
                  signed Service Agreement, constitute the entire agreement
                  between you and Fenomenon Creative LLC d/b/a Krieto with
                  respect to your use of the Website and Services, and
                  supersede all prior and contemporaneous agreements,
                  representations, warranties, and understandings.
                </P>

                <H3>14.2 Severability</H3>
                <P>
                  If any provision of these Terms is found by a court of
                  competent jurisdiction to be invalid, illegal, or
                  unenforceable, that provision shall be deemed modified to
                  the minimum extent necessary to make it enforceable, or
                  severed if modification is not possible, without affecting
                  the validity and enforceability of the remaining
                  provisions.
                </P>

                <H3>14.3 Waiver</H3>
                <P>
                  No waiver by Fenomenon Creative LLC d/b/a Krieto of any
                  term or condition in these Terms shall be deemed a
                  continuing waiver of such term or condition or a waiver of
                  any other term or condition. Failure to enforce any
                  provision of these Terms shall not constitute a waiver.
                </P>

                <H3>14.4 Assignment</H3>
                <P>
                  You may not assign or transfer your rights or obligations
                  under these Terms without our prior written consent.
                  Fenomenon Creative LLC d/b/a Krieto may assign or transfer
                  these Terms, in whole or in part, without restriction,
                  including in connection with a merger, acquisition, or
                  sale of assets, provided we give you notice of any such
                  assignment.
                </P>

                <H3>14.5 Force Majeure</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto shall not be liable
                  for any delay or failure in performance resulting from
                  causes beyond our reasonable control, including but not
                  limited to acts of God, natural disasters, pandemic, war,
                  terrorism, civil unrest, government action, internet
                  outages, third-party platform failures, or utility
                  failures. We will notify you promptly of any such event
                  and make reasonable efforts to resume performance as soon
                  as practicable.
                </P>

                <H3>14.6 Independent Contractor</H3>
                <P>
                  Fenomenon Creative LLC d/b/a Krieto and its personnel
                  operate as independent contractors. Nothing in these
                  Terms creates or implies any employment, partnership,
                  joint venture, agency, franchise, or other business
                  relationship between Fenomenon Creative LLC d/b/a Krieto
                  and you. Neither party has authority to bind the other to
                  any obligation without express written consent.
                </P>

                <H3>14.7 Notices</H3>
                <P>All notices under these Terms must be in writing and delivered by:</P>
                <UL>
                  <LI>Email to contact@krieto.co for notices to Fenomenon Creative LLC d/b/a Krieto</LI>
                </UL>

                <H3>14.8 No Third-Party Beneficiaries</H3>
                <P>
                  These Terms are for the sole benefit of the parties and
                  their respective permitted successors and assigns.
                  Nothing in these Terms creates any legal or equitable
                  rights in any third party.
                </P>

                <H3>14.9 Headings</H3>
                <P>Section headings are for convenience only and have no legal or contractual effect.</P>
              </div>

              {/* 15 */}
              <div>
                <H2 id="changes-to-terms" number="15" title="Changes to These Terms" />
                <P>
                  Fenomenon Creative LLC d/b/a Krieto reserves the right to
                  update or modify these Terms at any time. When we make
                  material changes, we will:
                </P>
                <UL>
                  <LI>Update the &ldquo;Last Updated&rdquo; date at the top of this document</LI>
                  <LI>Post the updated Terms on krieto.co</LI>
                  <LI>Where required or appropriate, provide notice via email or a prominent Website notice</LI>
                </UL>
                <P>
                  Your continued use of our Website or Services after the
                  effective date of updated Terms constitutes your
                  acceptance of the changes. We recommend reviewing these
                  Terms periodically. For active service engagements,
                  material changes will not apply until renewal or a new
                  engagement commences, or 30 days after notice, whichever
                  is later.
                </P>
              </div>

              {/* 16 */}
              <div className="rounded-[20px] border border-white/10 bg-[#0A0F1A] p-6 sm:p-8">
                <H2 id="contact-information" number="16" title="Contact Information" />
                <P>
                  For questions, concerns, or notices regarding these Terms
                  of Service, please contact:
                </P>
                <UL>
                  <LI>Fenomenon Creative LLC d/b/a Krieto</LI>
                  <LI>Email: contact@krieto.co</LI>
                  <LI>Website: krieto.co/contact</LI>
                </UL>
                <P>
                  We welcome your questions and will respond to all
                  legitimate inquiries promptly.
                </P>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-slate-500">
                    <span className="text-slate-300">Acknowledgement.</span>{" "}
                    By using krieto.co or engaging Fenomenon Creative LLC
                    d/b/a Krieto for services, you acknowledge that you have
                    read, understood, and agree to be bound by both the
                    Privacy Policy and Terms of Service set out in this
                    document, effective July 8, 2026.
                  </p>
                </div>

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

export default TermsOfService;