import type { Metadata } from 'next';
import { ArrowRight, BarChart3, Code2, FileText, Laptop, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, ButtonLink, SectionHeading } from '@/components/ui';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Professional services',
  description: 'Explore La Grande Galaxie services across web development, mobile apps, online learning, data analysis, and research writing support.'
};

const icons = [Code2, Laptop, Sparkles, BarChart3, FileText];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container page-hero-grid"><div><Breadcrumbs items={[{ label: 'Services' }]} /><p className="eyebrow">For organizations and professionals</p><h1 className="display">Bring the right expertise to the work in front of you.</h1></div><div className="page-hero-aside"><p>The service areas below are visible on the current public site. Each detail page turns the broad offer into a focused starting point for a useful conversation.</p><ButtonLink href="/contact">Share your brief</ButtonLink></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Service areas" title="Start with the question you need answered">A clear scope helps the right people decide what to do next.</SectionHeading><div className="card-grid">{services.map((service, index) => { const Icon = icons[index]; return <article className="service-card" key={service.slug}><span className="icon-box"><Icon size={21} /></span><p className="card-kicker">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.summary}</p><div className="card-footer"><Link className="card-link" href={`/services/${service.slug}`}>View service <ArrowRight size={16} /></Link></div></article>; })}</div></div></section>
    <section className="section section-tint"><div className="container split-section"><div className="sticky-copy"><p className="eyebrow">A business path</p><h2>Good service starts with a useful brief.</h2><p className="section-lede">Tell us what needs to change, who it affects, what you already have, and what a useful handoff would look like.</p><ButtonLink href="/contact">Start an enquiry</ButtonLink></div><div className="number-list"><div className="number-item"><span className="number">01</span><div><h3>Describe the need</h3><p>Share the work, audience, tools, context, and decision that the project should support.</p></div></div><div className="number-item"><span className="number">02</span><div><h3>Shape the scope</h3><p>Use the first conversation to make deliverables, boundaries, and the next review clear.</p></div></div><div className="number-item"><span className="number">03</span><div><h3>Agree the next step</h3><p>Confirm the people involved, the information required, and the right route forward.</p></div></div></div></div></section>
  </>;
}
