import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes }) {
  const [sortAsc, setSortAsc] = useState(true);
  const [tagFilter, setTagFilter] = useState(null);

  const allTags = Array.from(new Set((recipes || []).flatMap(r => r.tags || [])));

  let shown = (recipes || []).slice();
  if (tagFilter) shown = shown.filter(r => (r.tags || []).includes(tagFilter));
  shown.sort((a,b) => (a.cookTimeMinutes||0) - (b.cookTimeMinutes||0));
  if (!sortAsc) shown.reverse();

  return (
    <div>
      <div className="controls">
        <label>Sort by cook time:
          <select value={sortAsc ? 'asc' : 'desc'} onChange={e => setSortAsc(e.target.value === 'asc')}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>Filter tag:
          <select onChange={e => setTagFilter(e.target.value || null)}>
            <option value="">All</option>
            {allTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <div className="grid">
        {shown.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  );
}
