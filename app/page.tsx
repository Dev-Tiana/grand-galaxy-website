import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ButtonLink, ProgrammeChip, SectionHeading } from '@/components/ui';
import { brand, faqs, programmes, resources, services } from '@/lib/content';

export const metadata = {
  title: 'Learn practical skills. Get professional solutions.',
  description: 'Build valuable skills in technology, data, digital marketing, and professional development. Find practical support for your business or project.'
};

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    alternateName: brand.shortName,
    email: brand.email,
    telephone: brand.phone,
    sameAs: [brand.facebook, brand.instagram, brand.x, brand.telegram]
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <section className="hero hero-photographic">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Training and professional services</p>
          <h1 className="display">Learn Tech and Digital Skills. Get Expert Solutions for Your Business.</h1>
          <p className="lede">We help individuals build practical skills in data analysis, web development, digital marketing, UI UX design, and more. We also help businesses and organizations with professional digital and business services.</p>
          <div className="hero-actions"><ButtonLink href="/training">Explore Training</ButtonLink><ButtonLink href="/services" variant="secondary">Explore Our Services</ButtonLink></div>
        </div>
        <div className="hero-art reveal-up reveal-delay" role="img" aria-label="Professional learner working with a laptop and notebook"><div className="hero-photo-frame"><img src="/assets/hero-learning.webp" alt="Professional learner working with a laptop and notebook" /></div><div className="hero-note"><strong>Learn Skills. Build Possibilities.</strong><span>Technology Training | Professional Services</span></div></div>
      </div>
    </section>

    <section className="section section-sm">
      <div className="container"><SectionHeading eyebrow="Choose your goal" title="What Would You Like to Achieve?">Your next step could be learning a valuable skill or finding the right expertise for your business. Explore the path that matches your goal.</SectionHeading>
        <div className="pathway-grid">
          <article className="pathway-card pathway-card-photo"><img src="/assets/technology-learning.webp" alt="Laptop and digital work setup for learning technology" /><div className="pathway-card-body"><p className="card-kicker">For learners</p><h3>Develop Skills That Open Opportunities</h3><p>Explore training programmes in technology, data, digital marketing, and professional development. Find a programme that matches what you want to learn.</p><Link className="button button-primary button-small" href="/training">Explore Training <ArrowRight size={16} /></Link></div></article>
          <article className="pathway-card pathway-card-photo"><img src="/assets/business-collaboration.webp" alt="Business team collaborating around a project" /><div className="pathway-card-body"><p className="card-kicker">For businesses and organizations</p><h3>Find Professional Support for Your Business</h3><p>From digital solutions to research and data services, discover how Grand Galaxy can support your next project.</p><Link className="button button-secondary button-small" href="/services">Explore Services <ArrowRight size={16} /></Link></div></article>
        </div>
      </div>
    </section>

    <section className="section section-tint">
      <div className="container"><SectionHeading eyebrow="Training programmes" title="Explore practical programmes that build real skills">Discover training in technology, data, digital marketing, communication, and professional development. Explore available programmes and find the skills you want to develop.</SectionHeading>
        <div className="card-grid course-feature-grid">{programmes.slice(0, 6).map((programme) => <article className="programme-card image-card" key={programme.slug}><img className="card-image" src={programme.image} alt={`${programme.title} training visual`} /><div className="card-content"><div className="card-meta"><p className="category">{programme.category}</p><ProgrammeChip>{programme.kind}</ProgrammeChip></div><h3>{programme.title}</h3><p>{programme.summary}</p><div className="card-footer">{programme.price && <span className="price">{programme.price}</span>}<Link className="card-link" href={`/training/${programme.slug}`} aria-label={`View ${programme.title}`}>View programme <ArrowRight size={16} /></Link></div></div></article>)}</div>
        <div className="section-action"><ButtonLink href="/training" variant="ghost">Explore All Courses</ButtonLink></div>
      </div>
    </section>

    <section className="section">
      <div className="container"><SectionHeading eyebrow="Professional services" title="Professional Services for Your Business and Projects">Your business needs practical solutions, clear information, and reliable execution. Explore Grand Galaxy’s professional services and find the support that matches your goals.</SectionHeading>
        <div className="card-grid service-feature-grid">{services.map((service) => <article className="service-card image-card" key={service.slug}><img className="card-image" src={service.image} alt={`${service.title} service visual`} /><div className="card-content"><p className="card-kicker">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.summary}</p><div className="card-footer"><Link className="card-link" href={`/services/${service.slug}`}>Explore service <ArrowRight size={16} /></Link></div></div></article>)}</div>
      </div>
    </section>

    <section className="section section-blue story-section">
      <div className="container split-section"><div className="sticky-copy"><p className="eyebrow">More than learning</p><h2>Practical solutions for what comes next.</h2><p className="section-lede">Learning a new skill can change how you approach opportunities. Finding the right professional support can change how you approach a business challenge. Grand Galaxy brings training and professional services together, helping you take practical steps toward your goals.</p></div><div className="number-list"><div className="number-item"><span className="number">01</span><div><h3>Build useful capability</h3><p>Choose focused learning that connects to the work you want to do.</p></div></div><div className="number-item"><span className="number">02</span><div><h3>Bring the right expertise</h3><p>Share your project, research, data, or digital need and start a focused conversation.</p></div></div><div className="number-item"><span className="number">03</span><div><h3>Keep moving with purpose</h3><p>Turn a clearer question into a more useful plan, deliverable, or learning result.</p></div></div></div></div>
    </section>

    <section className="section section-tint">
      <div className="container"><SectionHeading eyebrow="Ideas and insights" title="Explore Ideas, Insights and Practical Guides">Discover useful articles on technology, professional skills, data, research, and business development. Learn something new, explore a topic in greater depth, and find practical information you can apply.</SectionHeading>
        <div className="resource-grid card-grid">{resources.slice(0, 3).map((resource) => <article className="resource-card image-card" key={resource.slug}><img className="card-image" src={resource.image} alt="" /><div className="card-content"><p className="resource-type">{resource.type}</p><h3>{resource.title}</h3><p>{resource.summary}</p><div className="card-footer"><Link className="card-link" href={`/resources/${resource.slug}`}>Read Guide <ArrowRight size={16} /></Link></div></div></article>)}</div>
      </div>
    </section>

    <section className="section"><div className="container narrow"><SectionHeading eyebrow="Questions people ask" title="Clear answers help people choose">Find quick answers about training, services, and contacting Grand Galaxy.</SectionHeading><div className="accordion-list">{faqs.slice(0, 4).map((faq) => <details className="accordion-item" key={faq.question}><summary>{faq.question}</summary><div className="accordion-answer">{faq.answer}</div></details>)}</div><div className="section-action"><ButtonLink href="/faq" variant="ghost">See all questions</ButtonLink></div></div></section>

    <section className="band"><div className="container band-inner"><div><p className="eyebrow">Ready when you are</p><h2>Choose the useful next step.</h2><p>Find a programme for your goals or tell us about the project you want to move forward.</p></div><div className="hero-actions"><ButtonLink href="/register" variant="light">Register for Training</ButtonLink><ButtonLink href="/contact" variant="secondary">Talk About Your Project</ButtonLink></div></div></section>
  </>;
}
