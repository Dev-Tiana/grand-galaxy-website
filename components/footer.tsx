import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { brand } from '@/lib/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <span className="logo-plate footer-logo"><Image src={brand.logoSrc} alt="La Grande Galaxie logo" width={160} height={76} /></span>
          <p>Practical learning and professional support for people building useful skills and organizations moving important work forward.</p>
          <div className="footer-contact">
            <a href={`mailto:${brand.email}`}><Mail size={16} />{brand.email}</a>
            <a href={brand.phoneHref}><Phone size={16} />{brand.phone}</a>
          </div>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/training">Training</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div>
          <p className="footer-label">Next step</p>
          <Link href="/register">Register for training <ArrowUpRight size={15} /></Link>
          <Link href="/contact">Discuss a service <ArrowUpRight size={15} /></Link>
          <a href={brand.whatsappHref} target="_blank" rel="noreferrer">Message on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
        <div>
          <p className="footer-label">Review before launch</p>
          <p className="footer-note">The operating address, legal details, current programme status, payment terms, and service area still need business approval.</p>
          <Link href="/legal/privacy">Privacy note</Link>
          <Link href="/legal/terms">Terms draft</Link>
          <Link href="/legal/academic-integrity">Academic integrity</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} La Grande Galaxie. Content shown as verified or awaiting approval.</span>
        <span>Built for clarity, learning, and useful action.</span>
      </div>
    </footer>
  );
}
