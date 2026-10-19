'use client';

import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { programmes, statusLabel } from '@/lib/content';
import { StatusChip } from '@/components/ui';

export function Catalogue() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All topics');
  const categories = ['All topics', ...Array.from(new Set(programmes.map((programme) => programme.category)))];
  const filtered = useMemo(() => programmes.filter((programme) => {
    const haystack = `${programme.title} ${programme.summary} ${programme.category}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === 'All topics' || programme.category === category);
  }), [category, query]);

  return <>
    <div className="catalogue-layout">
      <aside className="filter-panel" aria-label="Training filters">
        <label htmlFor="topic-filter">Topic</label>
        <select id="topic-filter" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <p className="form-help">Filters reflect the working catalogue. Current dates, fees, and cohort status need approval.</p>
      </aside>
      <div>
        <div className="search-row">
          <div><p className="eyebrow">Browse programmes</p><h2>{filtered.length} programme{filtered.length === 1 ? '' : 's'} to explore</h2></div>
          <div className="search-field-wrap"><label htmlFor="catalogue-search">Search by topic or skill</label><div style={{ position: 'relative' }}><Search size={17} style={{ position: 'absolute', left: 13, top: 15, color: '#5f6675' }} /><input className="search-field" style={{ paddingLeft: 39 }} id="catalogue-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try data or Excel" /></div></div>
        </div>
        {filtered.length > 0 ? <div className="catalogue-grid">{filtered.map((programme) => <article className="programme-card" key={programme.slug}><p className="category">{programme.category}</p><h3>{programme.title}</h3><p>{programme.summary}</p><p className="format">{programme.format}</p><div className="card-footer"><StatusChip status={programme.status} /><Link className="card-link" href={`/training/${programme.slug}`} aria-label={`View ${programme.title}`}>View details <ArrowRight size={16} /></Link></div></article>)}</div> : <div className="empty-state"><p>No programme matches that search yet.</p><button className="button button-secondary" type="button" onClick={() => { setQuery(''); setCategory('All topics'); }}>Clear filters</button></div>}
        <p className="form-help" style={{ marginTop: 22 }}>Status note: {statusLabel['needs approval']} means the public source lists the offer, while the current business details are still open.</p>
      </div>
    </div>
  </>;
}
