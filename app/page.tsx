import Link from 'next/link';
import { ArrowRight, BarChart3, BriefcaseBusiness, Check, Code2, FileText, Laptop, MessageCircle, Sparkles } from 'lucide-react';
import { ButtonLink, SectionHeading, StatusChip } from '@/components/ui';
import { brand, faqs, programmes, resources, services } from '@/lib/content';

export const metadata = {
  title: 'Practical learning and professional support',
  description: 'Build useful skills and bring important work into focus with La Grande Galaxie training and professional services.'
};

const serviceIcons = [Code2, Laptop, Sparkles, BarChart3, FileText];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    alternateName: brand.shortName,
    email: brand.email,
    telephone: brand.phone,
    sameAs: ['https://ng.linkedin.com/company/la-grande-galaxie-consults-for-professionals', 'https://www.instagram.com/lagrandegalaxieconsults/']
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Learning and professional support</p>
          <h1 className="display">Build a useful skill. Move important work forward.</h1>
          <p className="lede">La Grande Galaxie brings practical training and professional support into one clear experience. Explore the route that fits what you want to do next.</p>
          <div className="hero-actions">
            <ButtonLink href="/training">Explore training</ButtonLink>
            <ButtonLink href="/services" variant="secondary">Explore services</ButtonLink>
          </div>
          <div className="hero-proof" aria-label="What the experience is designed around">
            <span><Check size={16} /> Clear next steps</span>
            <span><Check size={16} /> Practical focus</span>
            <span><Check size={16} /> Honest status</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract constellation illustration showing connected learning and work paths" role="img">
          <div className="hero-constellation" aria-hidden="true"><span className="hero-orbit hero-orbit-one" /><span className="hero-orbit hero-orbit-two" /><span className="hero-orbit hero-orbit-three" /><span className="hero-core" /><span className="hero-dot hero-dot-one" /><span className="hero-dot hero-dot-two" /><span className="hero-dot hero-dot-three" /><span className="hero-dot hero-dot-four" /></div>
          <div className="hero-note"><strong>One clear next step</strong><span>Choose a path and keep moving</span></div>
        </div>
      </div>
    </section>

    <section className="section section-sm">
      <div className="container">
        <SectionHeading eyebrow="Choose your route" title="Start with the work in front of you">Whether you are learning a new tool or shaping a service request, the next step should feel simple.</SectionHeading>
        <div className="pathway-grid">
          <article className="pathway-card">
            <div><p className="card-kicker">For learners</p><h3>Find a programme that fits your next goal.</h3><p>Compare topics, formats, and practical focus. Current dates, fees, and cohort status are shown only when approved.</p></div>
            <Link className="card-link" href="/training">Explore training <ArrowRight size={17} /></Link>
          </article>
          <article className="pathway-card pathway-card-business">
            <div><p className="card-kicker">For businesses</p><h3>Bring a real need into focus.</h3><p>Talk through a digital project, data question, training need, or writing support request with a clear brief.</p></div>
            <Link className="card-link" href="/contact">Discuss a service <ArrowRight size={17} /></Link>
          </article>
        </div>
      </div>
    </section>

    <section className="section section-tint">
      <div className="container">
        <SectionHeading eyebrow="Training catalogue" title="Practical paths for data and digital confidence">The current public catalogue includes data and professional development programmes. We keep the details honest while current cohorts are confirmed.</SectionHeading>
        <div className="card-grid">
          {programmes.slice(0, 3).map((programme) => <article className="programme-card" key={programme.slug}>
            <p className="category">{programme.category}</p>
            <h3>{programme.title}</h3>
            <p>{programme.summary}</p>
            <div className="card-footer"><StatusChip status={programme.status} /><Link className="card-link" href={`/training/${programme.slug}`} aria-label={`View ${programme.title}`}>Details <ArrowRight size={16} /></Link></div>
          </article>)}
        </div>
        <div style={{ marginTop: 24 }}><ButtonLink href="/training" variant="ghost">See the full catalogue</ButtonLink></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Professional services" title="Support for the work that cannot wait">The current site lists five service areas. Each page turns the broad offer into a clearer conversation about scope, deliverables, and next steps.</SectionHeading>
        <div className="card-grid">
          {services.map((service, index) => { const Icon = serviceIcons[index]; return <article className="service-card" key={service.slug}><span className="icon-box"><Icon size={21} /></span><p className="card-kicker">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.summary}</p><div className="card-footer"><Link className="card-link" href={`/services/${service.slug}`}>Explore service <ArrowRight size={16} /></Link></div></article>; })}
        </div>
      </div>
    </section>

    <section className="section section-blue">
      <div className="container split-section">
        <div className="sticky-copy"><p className="eyebrow">Why this experience is different</p><h2>Clarity comes before the commitment.</h2><p className="section-lede">The new website separates what is known from what still needs approval. That gives learners and businesses a better basis for their next decision.</p></div>
        <div className="number-list">
          <div className="number-item"><span className="number">01</span><div><h3>Useful information first</h3><p>See the topic, audience, format, and practical focus before you register or enquire.</p></div></div>
          <div className="number-item"><span className="number">02</span><div><h3>Two journeys, one clear system</h3><p>Learners get a catalogue and registration route. Businesses get service pages and an enquiry route.</p></div></div>
          <div className="number-item"><span className="number">03</span><div><h3>Evidence with context</h3><p>Historical programme details and pending approvals are labelled instead of being presented as current facts.</p></div></div>
          <div className="number-item"><span className="number">04</span><div><h3>Built to grow carefully</h3><p>The content model can support more programmes, service evidence, resources, and approved integrations later.</p></div></div>
        </div>
      </div>
    </section>

    <section className="section section-tint">
      <div className="container">
        <SectionHeading eyebrow="Resources" title="Make the next decision easier">Useful content should answer a real question and lead to a helpful next action.</SectionHeading>
        <div className="resource-grid card-grid">
          {resources.map((resource) => <article className="resource-card" key={resource.href}><p className="resource-type">{resource.type}</p><h3>{resource.title}</h3><p>{resource.summary}</p><div className="card-footer"><Link className="card-link" href={resource.href}>Read the guide <ArrowRight size={16} /></Link></div></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <SectionHeading eyebrow="Questions people ask" title="A clear answer is part of a good experience">We keep common questions close to the decision they support.</SectionHeading>
        <div className="accordion-list">{faqs.slice(0, 4).map((faq) => <details className="accordion-item" key={faq.question}><summary>{faq.question}</summary><div className="accordion-answer">{faq.answer}</div></details>)}</div>
        <div style={{ marginTop: 24 }}><ButtonLink href="/faq" variant="ghost">See all questions</ButtonLink></div>
      </div>
    </section>

    <section className="band">
      <div className="container band-inner"><div><h2>Ready to choose the next useful step?</h2><p>Register your interest in a programme or share the work you want to discuss. The team can confirm the details that are still open.</p></div><div className="hero-actions"><ButtonLink href="/register" variant="light">Register for training</ButtonLink><ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink></div></div>
    </section>

    <div style={{ display: 'none' }} aria-hidden="true"><BriefcaseBusiness /><MessageCircle /></div>
  </>;
}
