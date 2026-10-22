import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Breadcrumbs } from '@/components/ui';
import { RegisterForm } from '@/components/forms';

export const metadata: Metadata = { title: 'Register for training', description: 'Choose a La Grande Galaxie training programme and prepare a registration message for WhatsApp.' };

export default function RegisterPage() { return <><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Register' }]} /><p className="eyebrow">For learners and teams</p><h1 className="display">Register for Training</h1><p className="lede">Choose a programme, share your details, and prepare a WhatsApp message. You will review the message and press Send yourself.</p></div></section><section className="section"><div className="container form-layout"><div><p className="eyebrow">Your learning goal</p><h2>Ask for the details that matter.</h2><p className="lede">Ask about the current format, schedule, fee, access, and support for the programme you choose.</p></div><Suspense fallback={<div className="form-card"><p className="lede">Loading registration form...</p></div>}><RegisterForm /></Suspense></div></section></>; }
