import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, ButtonLink, SectionHeading } from '@/components/ui';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Professional services',
  description: 'Explore Grand Galaxy services across web development, mobile applications, online training, data analysis, and research writing.'
};

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container page-hero-grid"><div><Breadcrumbs items={[{ label: 'Services' }]} /><p className="eyebrow">For businesses and organizations</p><h1 className="display">Professional Services for Your Business and Projects</h1></div><div className="page-hero-aside"><p>Your business needs practical solutions, clear information, and reliable execution. Explore the support that matches your goals.</p><ButtonLink href="/contact">Talk About Your Project</ButtonLink></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Service areas" title="Find the expertise your project needs">From digital solutions to research and data services, Grand Galaxy can support your next project.</SectionHeading><div className="card-grid service-feature-grid">{services.map((service) => <article className="service-card image-card" key={service.slug}><img className="card-image" src={service.image} alt={`${service.title} service visual`} /><div className="card-content"><p className="card-kicker">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.summary}</p><div className="card-footer"><Link className="card-link" href={`/services/${service.slug}`}>View service <ArrowRight size={16} /></Link></div></div></article>)}</div></div></section>
    <section className="section section-tint"><div className="container split-section"><div className="sticky-copy"><p className="eyebrow">A focused conversation</p><h2>Good service starts with a useful brief.</h2><p className="section-lede">Tell us what needs to change, who it affects, what you already have, and what a useful handoff would look like.</p><ButtonLink href="/contact">Start an Enquiry</ButtonLink></div><div className="number-list"><div className="number-item"><span className="number">01</span><div><h3>Describe the need</h3><p>Share the work, audience, tools, context, and decision that the project should support.</p></div></div><div className="number-item"><span className="number">02</span><div><h3>Shape the scope</h3><p>Use the first conversation to make deliverables, boundaries, and the next review clear.</p></div></div><div className="number-item"><span className="number">03</span><div><h3>Agree the next step</h3><p>Confirm the people involved, the information required, and the right route forward.</p></div></div></div></div></section>
  </>;
}
