import type { Metadata } from 'next';
import { Catalogue } from '@/components/catalogue';
import { Breadcrumbs, ButtonLink } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Training catalogue',
  description: 'Explore the working La Grande Galaxie training catalogue across data skills and practical professional learning.'
};

export default function TrainingPage() {
  return <>
    <section className="page-hero"><div className="container page-hero-grid"><div><Breadcrumbs items={[{ label: 'Training' }]} /><p className="eyebrow">For learners and teams</p><h1 className="display">Find a programme that fits the work ahead.</h1></div><div className="page-hero-aside"><p>The catalogue is built from the current public programme and product pages. Dates, fees, certificates, and cohort status are labelled until the business confirms them.</p><ButtonLink href="/register" variant="ghost">Register your interest</ButtonLink></div></div></section>
    <section className="section"><div className="container"><Catalogue /></div></section>
    <section className="band"><div className="container band-inner"><div><h2>Need training for a team?</h2><p>Share the skill need, the audience, and the practical work your people want to improve.</p></div><ButtonLink href="/contact" variant="light">Discuss team training</ButtonLink></div></section>
  </>;
}
