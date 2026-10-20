import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, children, align = 'left' }: { eyebrow?: string; title: string; children?: ReactNode; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {children && <p className="section-lede">{children}</p>}
  </div>;
}

export function ButtonLink({ href, children, variant = 'primary', external = false }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost' | 'light'; external?: boolean }) {
  const className = `button button-${variant}`;
  if (external) return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowRight size={17} /></a>;
  return <Link className={className} href={href}>{children}<ArrowRight size={17} /></Link>;
}

export function ProgrammeChip({ children }: { children: ReactNode }) {
  return <span className="status-chip status-verified">{children}</span>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumbs">
    <Link href="/">Home</Link>
    {items.map((item, index) => <span key={`${item.label}-${index}`} className="breadcrumb-item"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}
  </nav>;
}
