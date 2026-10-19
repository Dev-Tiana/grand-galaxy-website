import type { Metadata } from 'next';
import { Breadcrumbs, SectionHeading, ButtonLink } from '@/components/ui';
import { faqs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Frequently asked questions',
  description: 'Answers about La Grande Galaxie training, service enquiries, current programme information, and academic integrity.'
};

export default function FAQPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'FAQ' }]} /><p className="eyebrow">Straight answers</p><h1 className="display">Questions deserve useful answers.</h1><p className="lede">These answers are based on what public sources show and what still needs approval.</p></div></section><section className="section"><div className="container narrow"><SectionHeading eyebrow="Learner and business questions" title="Keep the decision grounded">If a detail matters to your registration or enquiry, ask the team to confirm it.</SectionHeading><div className="accordion-list">{faqs.map((faq) => <details className="accordion-item" key={faq.question}><summary>{faq.question}</summary><div className="accordion-answer">{faq.answer}</div></details>)}</div><div style={{ marginTop: 28 }}><ButtonLink href="/contact">Ask a question</ButtonLink></div></div></section></>;
}
