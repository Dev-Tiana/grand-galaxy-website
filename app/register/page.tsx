import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui';
import { RegisterForm } from '@/components/forms';

export const metadata: Metadata = { title: 'Register for training', description: 'Register your interest in a Grand Galaxy training programme and ask for the current learning details.' };

type Props = { searchParams?: { programme?: string } };

export default function RegisterPage({ searchParams }: Props) { return <><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Register' }]} /><p className="eyebrow">For learners and teams</p><h1 className="display">Register for Training</h1><p className="lede">Choose a programme and share your details. Grand Galaxy will receive your email enquiry and can guide you through the current learning option.</p></div></section><section className="section"><div className="container form-layout"><div><p className="eyebrow">Your learning goal</p><h2>Ask for the details that matter.</h2><p className="lede">Ask about the current format, schedule, fee, access, and support for the programme you choose.</p></div><RegisterForm defaultProgramme={searchParams?.programme ?? ''} /></div></section></>; }
