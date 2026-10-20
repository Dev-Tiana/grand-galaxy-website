import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { getService, services } from '@/lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.title, description: service.summary };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} /><p className="eyebrow">{service.eyebrow}</p><h1 className="display">{service.title}</h1><p className="lede">{service.summary}</p></div></section>
    <section className="section"><div className="container detail-grid"><div className="detail-content"><img className="detail-image" src={service.image} alt={`${service.title} service visual`} /><h2>The problem this can help solve</h2><p>{service.problem}</p><h2>What the conversation can cover</h2><ul className="check-list">{service.deliverables.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul><h2>A practical process</h2><ol className="number-list">{service.process.map((item, index) => <li className="number-item" key={item}><span className="number">0{index + 1}</span><div><p>{item}</p></div></li>)}</ol><ButtonLink href="/contact">Talk About This Service</ButtonLink></div><aside className="aside-card"><p className="eyebrow">Start a conversation</p><h2>Bring a focused brief.</h2><p>Share the current situation, what you want to improve, and any timing or delivery constraints.</p><ButtonLink href="/contact" variant="light">Send an Enquiry</ButtonLink></aside></div></section>
  </>;
}
