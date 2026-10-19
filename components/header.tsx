'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { brand } from '@/lib/content';

const links = [
  { href: '/training', label: 'Training' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-lockup" href="/" aria-label="La Grande Galaxie home" onClick={() => setOpen(false)}>
          <span className="logo-plate"><Image src={brand.logoSrc} alt="La Grande Galaxie logo" width={142} height={68} priority /></span>
          <span className="brand-tag">LGGx</span>
        </Link>
        <nav id="primary-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="button button-small button-primary nav-cta" href="/register" onClick={() => setOpen(false)}>Register</Link>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
