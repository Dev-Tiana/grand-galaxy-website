import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui';
import { RegisterForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Register for training',
  description: 'Register your interest in a La Grande Galaxie training programme and request the current programme details.'
};

type Props = { searchParams?: { programme?: string } };

export default function RegisterPage({ searchParams }: Props) {
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Registration' }]} /><p className="eyebrow">For learners and teams</p><h1 className="display">Register your interest and ask the right question.</h1><p className="lede">Programme dates, fees, access, and certificate details need confirmation. This form helps the team understand what you are looking for.</p></div></section>
    <section className="section"><div className="container form-layout"><div><p className="eyebrow">Before you submit</p><h2>Ask for the current details.</h2><p className="lede">The public catalogue combines current and historical programme pages. Please ask for the current cohort, schedule, fee, delivery channel, and support arrangement before making a payment.</p><div className="approval-box">The Preview form confirms the interaction locally. A live registration integration, payment path, and data retention policy still need business authorization.</div></div><RegisterForm defaultProgramme={searchParams?.programme ?? ''} /></div></section>
  </>;
}
