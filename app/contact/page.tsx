import type { Metadata } from 'next';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { brand } from '@/lib/content';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Talk about your project',
  description: 'Tell Grand Galaxy what you want to achieve, the challenges you are facing, and the professional services you need.'
};

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Contact' }]} /><p className="eyebrow">For businesses and organizations</p><h1 className="display">Let’s Talk About Your Project</h1><p className="lede">Have a project in mind or need professional support? Tell us what you want to achieve, the challenges you are facing, and the services you need. Our team can review your enquiry and discuss the next steps with you.</p></div></section>
    <section className="section"><div className="container form-layout"><div><p className="eyebrow">Get in Touch</p><h2>Choose the channel that works for you.</h2><p className="lede">Use the form to create an email enquiry, or contact Grand Galaxy directly by email, phone, or WhatsApp.</p><div className="contact-list"><a href={`mailto:${brand.email}`}><Mail size={19} />{brand.email}</a><a href={brand.phoneHref}><Phone size={19} />{brand.phone}</a><a href={brand.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={19} />Message on WhatsApp</a></div><div className="contact-callout"><strong>Tell us about the outcome you want.</strong><span>A focused brief helps the team understand your audience, tools, timing, and the kind of support that would be useful.</span></div><ButtonLink href="/services" variant="ghost">Explore professional services</ButtonLink></div><ContactForm /></div></section>
  </>;
}
