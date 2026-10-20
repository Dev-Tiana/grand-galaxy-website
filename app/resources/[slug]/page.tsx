import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { getResource, resources } from '@/lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() { return resources.map((resource) => ({ slug: resource.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return { title: 'Guide not found' };
  return { title: resource.title, description: resource.summary };
}

export default function ResourceArticlePage({ params }: Props) {
  const resource = getResource(params.slug);
  if (!resource) notFound();
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Resources', href: '/resources' }, { label: resource.title }]} /><p className="eyebrow">{resource.type}</p><h1 className="display">{resource.title}</h1><p className="lede">{resource.intro}</p></div></section>
    <article className="section"><div className="container article-layout"><div className="prose article-content"><img className="article-image" src={resource.image} alt="" /><p className="article-lede">{resource.intro}</p>{resource.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<h2>In conclusion</h2><p>{resource.conclusion}</p><div className="article-next"><p className="eyebrow">A useful next step</p><p>{resource.nextStep}</p><ButtonLink href={resource.relatedHref}>{resource.relatedLabel}</ButtonLink></div></div><aside className="aside-card article-aside"><p className="eyebrow">Keep exploring</p><h2>More practical guidance.</h2><p>Return to the resource library for more ideas on learning, data, research, and digital projects.</p><Link className="button button-light" href="/resources">View all guides <ArrowRight size={17} /></Link></aside></div></article>
  </>;
}
