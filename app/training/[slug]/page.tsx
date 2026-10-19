import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { Breadcrumbs, ButtonLink, SectionHeading, StatusChip } from '@/components/ui';
import { getProgramme, programmes } from '@/lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() { return programmes.map((programme) => ({ slug: programme.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const programme = getProgramme(params.slug);
  if (!programme) return { title: 'Programme not found' };
  return { title: programme.title, description: programme.summary };
}

export default function ProgrammePage({ params }: Props) {
  const programme = getProgramme(params.slug);
  if (!programme) notFound();
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Training', href: '/training' }, { label: programme.title }]} /><p className="eyebrow">{programme.category}</p><h1 className="display">{programme.title}</h1><p className="lede">{programme.summary}</p></div></section>
    <section className="section"><div className="container detail-grid"><div className="detail-content"><StatusChip status={programme.status} /><h2>What this programme covers</h2><ul className="check-list">{programme.details.map((detail) => <li key={detail}><Check size={17} /> <span>{detail}</span></li>)}</ul><h2>What to confirm before registration</h2><p>The public source gives a useful starting point, but the current cohort date, schedule, fee, delivery channel, certificate policy, and support arrangement need confirmation. Use the registration route to share your interest and request the current details.</p><div className="approval-box">This page is intentionally careful. A published programme or product page is not treated as proof that a current cohort is open.</div><h2>Next step</h2><p>If the topic fits what you want to do next, register your interest. The team can confirm the current option and explain what happens after registration.</p><ButtonLink href={`/register?programme=${programme.slug}`}>Register your interest</ButtonLink></div><aside className="aside-card"><StatusChip status={programme.status} /><h2>Keep the decision clear.</h2><p>Ask for the current date, fee, format, and access details before you commit.</p><ButtonLink href={programme.sourceHref} variant="light" external>View public source <ArrowUpRight size={16} /></ButtonLink></aside></div></section>
  </>;
}
