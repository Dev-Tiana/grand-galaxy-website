import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, SectionHeading } from '@/components/ui';
import { resources } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Ideas, insights, and practical guides',
  description: 'Read practical guides on technology, professional skills, data, research, and business development from Grand Galaxy.'
};

export default function ResourcesPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Resources' }]} /><p className="eyebrow">Learn something useful</p><h1 className="display">Explore Ideas, Insights and Practical Guides</h1><p className="lede">Discover useful articles on technology, professional skills, data, research, and business development. Learn something new, explore a topic in greater depth, and find practical information you can apply.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Guides and insights" title="Read the idea, then put it to work">Every guide is built around a practical question and ends with a useful next action.</SectionHeading><div className="resource-grid card-grid">{resources.map((resource) => <article className="resource-card image-card" key={resource.slug}><img className="card-image" src={resource.image} alt="" /><div className="card-content"><p className="resource-type">{resource.type}</p><h3>{resource.title}</h3><p>{resource.summary}</p><div className="card-footer"><Link className="card-link" href={`/resources/${resource.slug}`}>Read Guide <ArrowRight size={16} /></Link></div></div></article>)}</div></div></section>
  </>;
}
