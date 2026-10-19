import type { Metadata } from 'next';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { brand } from '@/lib/content';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Contact La Grande Galaxie',
  description: 'Contact La Grande Galaxie about training, technology services, data analysis, tutoring, or research writing support.'
};

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Contact' }]} /><p className="eyebrow">Start with a clear brief</p><h1 className="display">Tell us what needs to move forward.</h1><p className="lede">Share a training question, a service need, or an approval update. The form below is functional in this Preview and shows its confirmation state without sending personal data.</p></div></section>
    <section className="section"><div className="container form-layout"><div><p className="eyebrow">Verified contact channels</p><h2>Use the channel that fits the conversation.</h2><p className="lede">The public site publishes the contact details below. Response timing, operating address, and service area still need confirmation.</p><div className="contact-list"><a href={`mailto:${brand.email}`}><Mail size={19} />{brand.email}</a><a href={brand.phoneHref}><Phone size={19} />{brand.phone}</a><a href={brand.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={19} />Message on WhatsApp</a></div><div className="approval-box">No street address, city, state, hours, or map was verified on the inspected public pages. This site does not invent one.</div><ButtonLink href="/register" variant="ghost">Register for training</ButtonLink></div><ContactForm /></div></section>
  </>;
}
