'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { brand, programmes } from '@/lib/content';

function track(name: string) {
  if (typeof window !== 'undefined') {
    const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
    dataLayer?.push({ event: name });
  }
}

function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }

function openWhatsApp(body: string) {
  const url = `${brand.whatsappHref}?text=${encodeURIComponent(body)}`;
  const popup = window.open(url, '_blank', 'noopener,noreferrer');
  if (!popup) window.location.href = url;
  return url;
}

function PreparedMessage({ url, title, onReset }: { url: string; title: string; onReset: () => void }) {
  return <div className="form-card form-success" role="status"><CheckCircle2 size={32} color="#00CE38" /><h2>{title}</h2><p className="lede">WhatsApp should open with your message ready. Press <strong>Send</strong> in WhatsApp to complete the enquiry. If it did not open, use the button below.</p><div className="form-actions"><a className="button button-primary" href={url} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Open WhatsApp</a><button className="button button-secondary" type="button" onClick={onReset}>Start another message</button></div></div>;
}

const serviceOptions = ['Web Development', 'Mobile Application Development', 'Online Tutorials and Training', 'Professional Data Analysis', 'Research and Report Writing', 'Team training'];
const enquiryTypes = ['General enquiry', 'Professional service', 'Corporate training', 'Programme enquiry'];

export function ContactForm() {
  const query = useSearchParams();
  const serviceFromQuery = query.get('service') || '';
  const programmeFromQuery = query.get('programme') || '';
  const initialType = serviceFromQuery ? 'Professional service' : programmeFromQuery ? 'Programme enquiry' : 'General enquiry';
  const [enquiryType, setEnquiryType] = useState(initialType);
  const [preparedUrl, setPreparedUrl] = useState('');
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
    const programme = String(form.get('programme') || '').trim();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();
    const participants = String(form.get('participants') || '').trim();
    const honeypot = String(form.get('website') || '').trim();
    if (honeypot) return;
    if (!name || !email || !phone) { setError('Please complete your name, email, and phone number.'); return; }
    if (!validEmail(email)) { setError('Please enter a valid email address.'); return; }

    let body = '';
    if (enquiryType === 'Professional service') {
      if (!service || !message) { setError('Please choose a service and describe your project.'); return; }
      body = ['NEW SERVICE ENQUIRY', `Full Name: ${name}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Company or Organization: ${company || 'Not provided'}`, `Service Required: ${service}`, '', `Project Description: ${message}`].join('\n');
      track('service_enquiry_prepare');
    } else if (enquiryType === 'Corporate training') {
      if (!company || !programme || !participants || !message) { setError('Please complete your company, training programme, participant count, and requirements.'); return; }
      body = ['NEW CORPORATE TRAINING ENQUIRY', `Contact Name: ${name}`, `Company or Organization: ${company}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Training Programme: ${programme}`, `Number of Participants: ${participants}`, '', `Training Requirements: ${message}`].join('\n');
      track('corporate_training_prepare');
    } else if (enquiryType === 'Programme enquiry') {
      if (!programme || !message) { setError('Please choose a programme and add your question.'); return; }
      body = ['NEW PROGRAMME ENQUIRY', `Full Name: ${name}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Programme: ${programme}`, '', `Question: ${message}`].join('\n');
      track('programme_enquiry_prepare');
    } else {
      if (!subject || !message) { setError('Please add a subject and message.'); return; }
      body = ['NEW GENERAL ENQUIRY', `Full Name: ${name}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Subject: ${subject}`, '', `Message: ${message}`].join('\n');
      track('general_enquiry_prepare');
    }
    setPreparedUrl(openWhatsApp(body));
  }

  if (preparedUrl) return <PreparedMessage url={preparedUrl} title="Your WhatsApp message is ready." onReset={() => setPreparedUrl('')} />;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field full"><label htmlFor="contact-type">What do you want to discuss?</label><select id="contact-type" name="enquiryType" value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)}><option value="">Choose an enquiry type</option>{enquiryTypes.map((item) => <option key={item}>{item}</option>)}</select></div><div className="form-field"><label htmlFor="contact-name">Full Name</label><input id="contact-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="contact-phone">Phone Number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required /></div>{enquiryType !== 'General enquiry' && <div className="form-field"><label htmlFor="contact-company">Company or Organization</label><input id="contact-company" name="company" autoComplete="organization" required={enquiryType === 'Corporate training'} /></div>}{enquiryType === 'Professional service' && <div className="form-field full"><label htmlFor="contact-service">Service Required</label><select id="contact-service" name="service" defaultValue={serviceFromQuery} required><option value="">Choose a service</option>{serviceOptions.map((item) => <option key={item}>{item}</option>)}</select></div>}{(enquiryType === 'Corporate training' || enquiryType === 'Programme enquiry') && <div className="form-field full"><label htmlFor="contact-programme">Training Programme</label><select id="contact-programme" name="programme" defaultValue={programmeFromQuery} required><option value="">Choose a programme</option>{programmes.map((programme) => <option key={programme.slug}>{programme.title}</option>)}</select></div>}{enquiryType === 'Corporate training' && <div className="form-field"><label htmlFor="contact-participants">Number of Participants</label><input id="contact-participants" name="participants" inputMode="numeric" required /></div>}{enquiryType === 'General enquiry' && <div className="form-field full"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" required /></div>}<div className="form-field full"><label htmlFor="contact-message">{enquiryType === 'Professional service' ? 'Project Description' : enquiryType === 'Corporate training' ? 'Training Requirements' : enquiryType === 'Programme enquiry' ? 'Your Question' : 'Message'}</label><textarea id="contact-message" name="message" required placeholder={enquiryType === 'Professional service' ? 'Tell us what you want to achieve, the challenges you are facing, and the support you need.' : enquiryType === 'Corporate training' ? 'Describe the skills, timing, delivery preference, or other requirements for your team.' : enquiryType === 'Programme enquiry' ? 'Ask about the current format, schedule, fee, access, or support.' : 'Tell us how we can help.'} /></div><div className="form-field honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Continue to WhatsApp <ArrowRight size={17} /></button><p className="form-help">Your message is prepared locally. You will review it in WhatsApp and press Send yourself.</p></div></form>;
}

export function RegisterForm({ defaultProgramme = '' }: { defaultProgramme?: string } = {}) {
  const query = useSearchParams();
  const programmeFromQuery = query.get('programme') || defaultProgramme;
  const [preparedUrl, setPreparedUrl] = useState('');
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const programme = String(form.get('programme') || '').trim();
    const format = String(form.get('format') || '').trim();
    const note = String(form.get('note') || '').trim();
    if (!name || !email || !phone || !programme || !format) { setError('Please complete your name, email, phone number, programme, and preferred format.'); return; }
    if (!validEmail(email)) { setError('Please enter a valid email address.'); return; }
    const selected = programmes.find((item) => item.title === programme || item.slug === programme);
    const body = ['NEW TRAINING REGISTRATION', `Full Name: ${name}`, `Email Address: ${email}`, `Phone Number: ${phone}`, `Selected Programme: ${selected?.title || programme}`, `Preferred Training Format: ${format}`, '', `Additional Information: ${note || 'Please share the current registration details.'}`].join('\n');
    setPreparedUrl(openWhatsApp(body));
    track('training_registration_prepare');
  }

  if (preparedUrl) return <PreparedMessage url={preparedUrl} title="Your training registration message is ready." onReset={() => setPreparedUrl('')} />;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field"><label htmlFor="register-name">Full Name</label><input id="register-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="register-email">Email Address</label><input id="register-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="register-phone">Phone Number</label><input id="register-phone" name="phone" type="tel" autoComplete="tel" required /></div><div className="form-field"><label htmlFor="register-programme">Programme of Interest</label><select id="register-programme" name="programme" defaultValue={programmeFromQuery} required><option value="">Choose a programme</option>{programmes.map((programme) => <option key={programme.slug} value={programme.slug}>{programme.title}</option>)}</select></div><div className="form-field full"><label htmlFor="register-format">Preferred Training Format</label><select id="register-format" name="format" defaultValue="" required><option value="">Choose a format</option><option>Live online</option><option>Recorded online</option><option>Blended learning</option><option>Not sure yet</option></select></div><div className="form-field full"><label htmlFor="register-note">Additional Information</label><textarea id="register-note" name="note" placeholder="Ask about the current schedule, fee, access, or support." /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Continue to WhatsApp <ArrowRight size={17} /></button><p className="form-help">Your message is prepared locally. You will review it in WhatsApp and press Send yourself.</p></div></form>;
}
