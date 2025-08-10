import React, { useState } from 'react';

export default function SearchBar({ onResults }) {
  const [q, setQ] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const doSearch = async () => {
    setError('');
    setInfo('');
    onResults('')

    if (!q.trim()) {
      setError('Please enter a search term.');
      return;
    }
    if (q.trim().length < 3) {
      setError('Search term must be at least 3 characters.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/api/recipes?q=${encodeURIComponent(q.trim())}`);
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data = await res.json();

      if (Array.isArray(data) && data.length === 0) {
        setInfo('No recipes found for your search.');
      }
      onResults(data);
    } catch (err) {
      setError(`Search failed: ${err.message}`);
    }
  };

  return (
    <div className="searchbar">
      <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            doSearch();
          }}
        >
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search recipes by name or cuisine"
          />
          <button type="submit">Search</button>
      </form>

      {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
      {info && <div style={{ color: 'blue', marginTop: '5px' }}>{info}</div>}
    </div>
  );
}
