'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { programmes } from '@/lib/content';

function track(name: string) {
  if (typeof window !== 'undefined') {
    const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
    dataLayer?.push({ event: name });
  }
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    if (!form.get('name') || !form.get('email') || !form.get('message')) { setError('Please complete your name, email, and message.'); return; }
    setSubmitted(true);
    track('service_enquiry_submit');
  }

  if (submitted) return <div className="form-card"><CheckCircle2 size={32} color="#00CE38" /><h2>Thank you for sharing the brief.</h2><p className="lede">Your message is ready for the team to review. A response channel and timing still need business confirmation.</p><button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>Send another message</button></div>;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="contact-company">Organization or project</label><input id="contact-company" name="company" autoComplete="organization" /></div><div className="form-field"><label htmlFor="contact-topic">What do you need?</label><select id="contact-topic" name="topic" defaultValue="Service enquiry"><option>Service enquiry</option><option>Team training</option><option>Programme question</option><option>Approval update</option></select></div><div className="form-field full"><label htmlFor="contact-message">Tell us what you want to make clearer</label><textarea id="contact-message" name="message" required placeholder="Share the situation, audience, and next step you have in mind." /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Send enquiry <ArrowRight size={17} /></button><p className="form-help">This preview does not send email or store personal data.</p></div></form>;
}

export function RegisterForm({ defaultProgramme = '' }: { defaultProgramme?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    if (!form.get('name') || !form.get('email') || !form.get('programme')) { setError('Please complete your name, email, and programme choice.'); return; }
    setSubmitted(true);
    track('training_registration_submit');
  }

  if (submitted) return <div className="form-card"><CheckCircle2 size={32} color="#00CE38" /><h2>Your interest is recorded for this preview.</h2><p className="lede">The live connection to the business still needs to be configured. Use the published contact details if you need a current cohort answer.</p><a className="button button-secondary" href="mailto:info@grandgalaxy.ng">Email the team <ArrowRight size={17} /></a></div>;

  return <form className="form-card" onSubmit={submit} noValidate><div className="form-grid"><div className="form-field"><label htmlFor="register-name">Your name</label><input id="register-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="register-email">Email address</label><input id="register-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="register-phone">Phone number</label><input id="register-phone" name="phone" type="tel" autoComplete="tel" /></div><div className="form-field"><label htmlFor="register-programme">Programme of interest</label><select id="register-programme" name="programme" defaultValue={defaultProgramme} required><option value="">Choose a programme</option>{programmes.map((programme) => <option key={programme.slug} value={programme.slug}>{programme.title}</option>)}</select></div><div className="form-field full"><label htmlFor="register-note">What would you like to know?</label><textarea id="register-note" name="note" placeholder="Ask about current dates, fees, format, or support." /></div></div>{error && <p className="error-message" role="alert">{error}</p>}<div className="form-actions"><button className="button button-primary" type="submit">Register interest <ArrowRight size={17} /></button><p className="form-help">This preview does not send email or store personal data.</p></div></form>;
}
