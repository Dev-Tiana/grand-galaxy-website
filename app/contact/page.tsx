import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Breadcrumbs, ButtonLink } from '@/components/ui';
import { brand } from '@/lib/content';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Talk about your project or learning need',
  description: 'Send a general enquiry, professional service brief, corporate training request, or programme question to La Grande Galaxie.'
};

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Contact' }]} /><p className="eyebrow">For learners, teams, and businesses</p><h1 className="display">Tell Us What You Want to Move Forward.</h1><p className="lede">Share a project, a learning question, a team training need, or a general enquiry. Choose the message type that fits and continue to WhatsApp when you are ready.</p></div></section>
    <section className="section"><div className="container form-layout"><div><p className="eyebrow">Start with the right context</p><h2>Choose a useful way to begin.</h2><p className="lede">The form prepares a WhatsApp message with the details you provide. You will review the message and press Send in WhatsApp yourself.</p><div className="contact-list"><a href={`mailto:${brand.email}`}><Mail size={19} />{brand.email}</a><a href={brand.phoneHref}><Phone size={19} />{brand.phone}</a><a href={brand.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={19} />Message on WhatsApp</a></div><div className="contact-callout"><strong>Useful context makes the first reply easier.</strong><span>Share your audience, preferred timing, current tools, and the result you want to work toward.</span></div><ButtonLink href="/services" variant="ghost">Explore professional services</ButtonLink></div><Suspense fallback={<div className="form-card"><p className="lede">Loading enquiry form...</p></div>}><ContactForm /></Suspense></div></section>
  </>;
}
