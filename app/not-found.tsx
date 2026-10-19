import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() { return <section className="section"><div className="container narrow"><p className="eyebrow">That page moved</p><h1 className="display">Let us bring you back to a useful place.</h1><p className="lede">The page you requested is not part of the current public route set.</p><div className="hero-actions"><Link className="button button-primary" href="/">Go home <ArrowRight size={17} /></Link><Link className="button button-secondary" href="/training">Explore training <ArrowRight size={17} /></Link></div></div></section>; }
