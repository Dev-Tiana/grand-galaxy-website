import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, SectionHeading } from '@/components/ui';
import { resources } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Practical guides from La Grande Galaxie for choosing learning paths, shaping digital projects, and asking better data questions.'
};

export default function ResourcesPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Resources' }]} /><p className="eyebrow">Useful before the next conversation</p><h1 className="display">Make the next decision easier.</h1><p className="lede">The resource area is designed around real questions from learners and businesses. The first release keeps the guidance concise and practical.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Guides and notes" title="Start with a question you can use">Each guide should lead to a clearer brief, a better learning choice, or a more useful next step.</SectionHeading><div className="resource-grid card-grid">{resources.map((resource) => <article className="resource-card" id={resource.href.split('#')[1]} key={resource.href}><p className="resource-type">{resource.type}</p><h3>{resource.title}</h3><p>{resource.summary}</p><Link className="card-link" href={resource.href}>Read the guide <ArrowRight size={16} /></Link></article>)}</div></div></section>
    <section className="section section-tint"><div className="container prose"><h2>Editorial note</h2><p>Future resources should carry an author, a last updated date, a clear source where factual claims are used, and a link to the relevant training or service page. The website should publish fewer useful pieces rather than a large set of thin pages.</p><div className="approval-box">Topic ownership, authorship, and publication review still need confirmation before this becomes a live editorial programme.</div></div></section>
  </>;
}
