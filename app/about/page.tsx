import type { Metadata } from 'next';
import { Breadcrumbs, ButtonLink, SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About La Grande Galaxie',
  description: 'Learn what public sources verify about La Grande Galaxie and how the new website separates evidence from open approval.'
};

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'About' }]} /><p className="eyebrow">The company story, carefully</p><h1 className="display">A clearer place to learn, ask, and build.</h1><p className="lede">La Grande Galaxie is presented publicly as a learning and professional support business. The current website connects training with services across technology, data, tutoring, and writing.</p></div></section>
    <section className="section"><div className="container split-section"><div className="sticky-copy"><p className="eyebrow">What public sources show</p><h2>Education and execution can meet in the same conversation.</h2><p className="section-lede">People need practical routes into new skills. Organizations need thoughtful support for real work. The website is designed to make those routes easier to understand without overstating what is not yet verified.</p></div><div className="number-list"><div className="number-item"><span className="number">01</span><div><h3>Learning support</h3><p>The public site describes self paced learning, live sessions, online tutoring, data skills programmes, and professional development offers.</p></div></div><div className="number-item"><span className="number">02</span><div><h3>Professional support</h3><p>The visible service areas include web development, mobile app development, data analysis, online tutoring, and research writing support.</p></div></div><div className="number-item"><span className="number">03</span><div><h3>Clear boundaries</h3><p>Current dates, fees, credentials, team details, location, and legal identity need business approval before they become public claims.</p></div></div></div></div></section>
    <section className="section section-tint"><div className="container"><SectionHeading eyebrow="Open approvals" title="Trust grows when the next question is visible">Before launch, the business should confirm the legal identity, operating address, service area, team and trainer profiles, current catalogue, fees, payment and refund terms, credentials, testimonials, and privacy handling.</SectionHeading><div className="approval-box">This page does not invent a founder story, founding year, registered address, or team biography. Those details can be added when the business provides and approves the evidence.</div><ButtonLink href="/contact">Share an approval update</ButtonLink></div></section>
  </>;
}
