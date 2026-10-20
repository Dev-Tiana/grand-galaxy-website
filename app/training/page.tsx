import type { Metadata } from 'next';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { Catalogue } from '@/components/catalogue';
import { programmes } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Training programmes',
  description: 'Explore training in technology, data, digital marketing, communication, and professional development.'
};

export default function TrainingPage() {
  return <>
    <section className="page-hero"><div className="container page-hero-grid"><div><Breadcrumbs items={[{ label: 'Training' }]} /><p className="eyebrow">For learners and teams</p><h1 className="display">Explore Training Programmes That Build Real Skills</h1></div><div className="page-hero-aside"><p>Discover training in technology, data, digital marketing, communication, and professional development. Explore available programmes and find the skills you want to develop.</p><ButtonLink href="/contact" variant="ghost">Ask about a programme</ButtonLink></div></div></section>
    <section className="section"><div className="container"><div className="catalogue-intro"><div><p className="eyebrow">{programmes.length} learning options</p><h2>Find a programme that matches your goal.</h2></div><p>Browse broad learning categories, focused online courses, mentorship, and professional development offers in one place.</p></div><Catalogue /></div></section>
  </>;
}
