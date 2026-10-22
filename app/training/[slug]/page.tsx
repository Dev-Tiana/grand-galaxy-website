import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Breadcrumbs, ButtonLink, ProgrammeChip } from '@/components/ui';
import { getProgramme, programmes } from '@/lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() { return programmes.map((programme) => ({ slug: programme.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const programme = getProgramme(params.slug);
  if (!programme) return { title: 'Programme not found' };
  return {
    title: programme.title,
    description: programme.summary,
    keywords: [programme.title, programme.category, 'La Grande Galaxie training', 'professional learning']
  };
}

const practicalValue: Record<string, string> = {
  'Data skills': 'Clearer data skills help you move from a question to a prepared dataset, a useful analysis, and an explanation that another person can understand.',
  'Technology': 'A grounded technology foundation helps you ask better project questions, choose a more useful starting point, and communicate with people building digital work.',
  'Digital skills': 'Digital marketing knowledge helps you connect audience needs, messages, channels, and practical campaign decisions.',
  'Design': 'Design knowledge helps you look at a digital experience through the needs of the people using it and the decisions they need to make.',
  'Professional skills': 'Professional skills become more useful when you can practise them in a real task, explain your thinking, and keep improving with feedback.',
  'Business skills': 'Business learning helps you organise decisions, communicate with people, and contribute more clearly to work that has a practical outcome.'
};

export default function ProgrammePage({ params }: Props) {
  const programme = getProgramme(params.slug);
  if (!programme) notFound();
  const related = programme.relatedSlugs.map((slug) => getProgramme(slug)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const details = [
    ['Duration', programme.duration],
    ['Format', programme.format],
    ['Level', programme.level],
    ['Fee', programme.price],
    ['Requirements', programme.requirements],
    ['Certificate', programme.certificate],
    ['Instructor', programme.instructor]
  ].filter((item): item is [string, string] => Boolean(item[1]));
  const programmeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: programme.title,
    description: programme.summary,
    provider: { '@type': 'Organization', name: 'La Grande Galaxie Consult' }
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programmeSchema) }} />
    <section className="page-hero programme-hero"><div className="container page-hero-grid"><div><Breadcrumbs items={[{ label: 'Training', href: '/training' }, { label: programme.title }]} /><p className="eyebrow">{programme.category} · {programme.kind}</p><h1 className="display">{programme.title}</h1><p className="lede">{programme.summary}</p><div className="hero-actions"><ButtonLink href={`/register?programme=${programme.slug}`}>Register Now</ButtonLink><ButtonLink href={`/contact?programme=${programme.slug}`} variant="secondary">Ask About This Programme</ButtonLink></div></div><div className="programme-hero-media"><img src={programme.image} alt={`${programme.title} learning visual`} /></div></div></section>
    <section className="section"><div className="container detail-grid"><div className="detail-content"><div className="detail-meta"><ProgrammeChip>{programme.kind}</ProgrammeChip><span>{programme.format}</span>{programme.price && <strong>{programme.price}</strong>}</div><h2>Programme overview</h2><p>{programme.overview}</p><h2>What you will learn</h2><div className="outcome-grid">{programme.outcomes.map((outcome) => <article className="outcome-card" key={outcome}><Check size={18} /><p>{outcome}</p></article>)}</div><h2>Who this programme is for</h2><ul className="check-list">{programme.audience.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul><h2>{programme.curriculum.length ? 'Programme curriculum' : 'Subject coverage'}</h2>{programme.curriculum.length ? <ol className="curriculum-list">{programme.curriculum.map((item, index) => <li key={item}><span className="number">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}</ol> : <ul className="check-list">{programme.topics.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul>}<h2>Why learn this skill?</h2><p>{practicalValue[programme.category] || 'A focused learning experience can help you connect a subject to a practical task, ask better questions, and decide what to practise next.'}</p><h2>Questions people ask</h2><div className="accordion-list"><details className="accordion-item"><summary>What does this programme cover?</summary><div className="accordion-answer">{programme.overview} The main subject areas are {programme.topics.slice(0, 3).join(', ')}{programme.topics.length > 3 ? ', and more.' : '.'}</div></details><details className="accordion-item"><summary>Who can ask about this programme?</summary><div className="accordion-answer">Anyone who wants to understand whether the subject, format, and current learning details fit their goal can send a question through the programme enquiry form.</div></details><details className="accordion-item"><summary>How do I ask about the current schedule or fee?</summary><div className="accordion-answer">Use Ask About This Programme or Continue to WhatsApp. The team can share the current information for this programme.</div></details></div><div className="detail-cta"><ButtonLink href={`/register?programme=${programme.slug}`}>Register Now</ButtonLink><ButtonLink href={`/contact?programme=${programme.slug}`} variant="secondary"><MessageCircle size={17} /> Ask About This Programme</ButtonLink></div></div><aside className="aside-card programme-aside"><ProgrammeChip>{programme.kind}</ProgrammeChip><h2>Programme details</h2>{details.length ? <dl className="details-list">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p>Ask the team for the current schedule, access, and fee details.</p>}<p>{programme.registrationNote}</p><ButtonLink href={`/register?programme=${programme.slug}`} variant="light">Register Now</ButtonLink><Link className="aside-text-link" href={`/contact?programme=${programme.slug}`}>Ask a question about this programme <ArrowRight size={15} /></Link></aside></div></section>
    {related.length > 0 && <section className="section section-tint"><div className="container"><div className="section-heading"><p className="eyebrow">Keep exploring</p><h2>Related programmes</h2><p className="section-lede">Compare another learning route before you choose your next step.</p></div><div className="card-grid related-grid">{related.map((item) => <article className="programme-card" key={item.slug}><img className="card-image" src={item.image} alt={`${item.title} learning visual`} /><div className="card-content"><p className="category">{item.category}</p><h3>{item.title}</h3><p>{item.summary}</p><div className="card-footer"><Link className="card-link" href={`/training/${item.slug}`}>View programme <ArrowRight size={16} /></Link></div></div></article>)}</div></div></section>}
  </>;
}
