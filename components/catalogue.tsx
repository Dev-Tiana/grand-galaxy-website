'use client';

import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { programmes } from '@/lib/content';
import { ProgrammeChip } from '@/components/ui';

export function Catalogue() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All topics');
  const categories = ['All topics', ...Array.from(new Set(programmes.map((programme) => programme.category)))];
  const filtered = useMemo(() => programmes.filter((programme) => {
    const haystack = `${programme.title} ${programme.summary} ${programme.category} ${programme.kind}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === 'All topics' || programme.category === category);
  }), [category, query]);

  return <div className="catalogue-layout">
    <aside className="filter-panel" aria-label="Training filters"><label htmlFor="topic-filter">Topic</label><select id="topic-filter" value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select><p className="form-help">Filter by the skill area that matches your learning goal.</p></aside>
    <div><div className="search-row"><div><p className="eyebrow">Browse the catalogue</p><h2>{filtered.length} programme{filtered.length === 1 ? '' : 's'} to explore</h2></div><div className="search-field-wrap"><label htmlFor="catalogue-search">Search by topic or skill</label><div className="search-input-wrap"><Search size={17} aria-hidden="true" /><input className="search-field" id="catalogue-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try data or Excel" /></div></div></div>
      {filtered.length > 0 ? <div className="catalogue-grid">{filtered.map((programme) => <article className="programme-card image-card" key={programme.slug}><img className="card-image" src={programme.image} alt={`${programme.title} training visual`} /><div className="card-content"><div className="card-meta"><p className="category">{programme.category}</p><ProgrammeChip>{programme.kind}</ProgrammeChip></div><h3>{programme.title}</h3><p>{programme.summary}</p><p className="format">{programme.format}{programme.duration ? ` · ${programme.duration}` : ''}{programme.level ? ` · ${programme.level}` : ''}</p>{programme.price && <p className="price">{programme.price}</p>}<div className="card-footer"><Link className="card-link" href={`/training/${programme.slug}`} aria-label={`View ${programme.title}`}>View details <ArrowRight size={16} /></Link><Link className="button button-small button-primary" href={`/register?programme=${programme.slug}`}>Register</Link></div></div></article>)}</div> : <div className="empty-state"><p>No programme matches that search yet.</p><button className="button button-secondary" type="button" onClick={() => { setQuery(''); setCategory('All topics'); }}>Clear filters</button></div>}
    </div>
  </div>;
}
