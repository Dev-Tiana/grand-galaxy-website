import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { Breadcrumbs, ButtonLink, ProgrammeChip } from '@/components/ui';
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
    <section className="section"><div className="container detail-grid"><div className="detail-content"><img className="detail-image" src={programme.image} alt={`${programme.title} training visual`} /><div className="detail-meta"><ProgrammeChip>{programme.kind}</ProgrammeChip><span>{programme.format}</span>{programme.price && <strong>{programme.price}</strong>}</div><h2>What you will explore</h2><ul className="check-list">{programme.details.map((detail) => <li key={detail}><Check size={17} /> <span>{detail}</span></li>)}</ul><h2>Make it part of your plan</h2><p>Use the programme details above to decide how this learning fits your goals. The team can share the current schedule, delivery information, access details, and registration guidance for the option you choose.</p><ButtonLink href={`/register?programme=${programme.slug}`}>Register Your Interest</ButtonLink></div><aside className="aside-card"><ProgrammeChip>{programme.kind}</ProgrammeChip><h2>Ready to learn?</h2><p>Tell the team which programme interests you and ask about the current learning format.</p><ButtonLink href={programme.sourceHref} variant="light" external>View programme page <ArrowUpRight size={16} /></ButtonLink></aside></div></section>
  </>;
}
