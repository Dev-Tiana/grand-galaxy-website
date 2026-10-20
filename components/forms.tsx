'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { brand, programmes } from '@/lib/content';

function track(name: string) {
  if (typeof window !== 'undefined') {
    const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
    dataLayer?.push({ event: name });
  }
}

function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const company = String(form.get('company') || '').trim();
    const service = String(form.get('service') || '').trim();
    const project = String(form.get('project') || '').trim();
    const honeypot = String(form.get('website') || '').trim();
    if (honeypot) return;
    if (!name || !email || !phone || !service || !project) { setError('Please complete your name, email, phone number, service, and project details.'); return; }
    if (!validEmail(email)) { setError('Please enter a valid email address.'); return; }
    const subject = `Project enquiry from ${name}`;
    const body = [`Full Name: ${name}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Company or Organization: ${company || 'Not provided'}`, `Service Required: ${service}`, '', 'Project Details:', project].join('\n');
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    track('service_enquiry_submit');
  }

  if (submitted) return <div className="form-card"><CheckCircle2 size={32} color="#00CE38" /><h2>Your email draft is ready.</h2><p className="lede">Please send the draft from your email app to complete the enquiry. If your email app did not open, write to <a className="inline-link" href={`mailto:${brand.email}`}>{brand.email}</a>.</p><button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field"><label htmlFor="contact-name">Full Name</label><input id="contact-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="contact-phone">Phone Number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required /></div><div className="form-field"><label htmlFor="contact-company">Company or Organization</label><input id="contact-company" name="company" autoComplete="organization" /></div><div className="form-field full"><label htmlFor="contact-service">Service Required</label><select id="contact-service" name="service" defaultValue="" required><option value="">Choose a service</option>{['Web Development', 'Mobile Application Development', 'Online Tutorials and Training', 'Professional Data Analysis', 'Research and Report Writing', 'Team training'].map((item) => <option key={item}>{item}</option>)}</select></div><div className="form-field full"><label htmlFor="contact-project">Project Details</label><textarea id="contact-project" name="project" required placeholder="Tell us what you want to achieve, the challenges you are facing, and the support you need." /></div><div className="form-field honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Submit Enquiry <ArrowRight size={17} /></button><p className="form-help">By using this form, you agree that Grand Galaxy may use your details to respond to your enquiry.</p></div></form>;
}

export function RegisterForm({ defaultProgramme = '' }: { defaultProgramme?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const programme = String(form.get('programme') || '').trim();
    if (!name || !email || !programme) { setError('Please complete your name, email, and programme choice.'); return; }
    if (!validEmail(email)) { setError('Please enter a valid email address.'); return; }
    const selected = programmes.find((item) => item.slug === programme);
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone Number: ${String(form.get('phone') || '').trim() || 'Not provided'}`, `Programme: ${selected?.title || programme}`, '', `Question: ${String(form.get('note') || '').trim() || 'Please share the current programme details.'}`].join('\n');
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Training interest from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    track('training_registration_submit');
  }

  if (submitted) return <div className="form-card"><CheckCircle2 size={32} color="#00CE38" /><h2>Your email draft is ready.</h2><p className="lede">Please send the draft from your email app to complete your registration enquiry.</p><a className="button button-secondary" href={`mailto:${brand.email}`}>Email the team <ArrowRight size={17} /></a></div>;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field"><label htmlFor="register-name">Full Name</label><input id="register-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="register-email">Email Address</label><input id="register-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="register-phone">Phone Number</label><input id="register-phone" name="phone" type="tel" autoComplete="tel" /></div><div className="form-field"><label htmlFor="register-programme">Programme of Interest</label><select id="register-programme" name="programme" defaultValue={defaultProgramme} required><option value="">Choose a programme</option>{programmes.map((programme) => <option key={programme.slug} value={programme.slug}>{programme.title}</option>)}</select></div><div className="form-field full"><label htmlFor="register-note">Your Question</label><textarea id="register-note" name="note" placeholder="Ask about the current format, schedule, fee, or support." /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Register Interest <ArrowRight size={17} /></button><p className="form-help">By using this form, you agree that Grand Galaxy may use your details to respond to your enquiry.</p></div></form>;
}
