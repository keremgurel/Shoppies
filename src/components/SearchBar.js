import React from 'react';
import '../index.css';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={e => { e.preventDefault(); }}>
          <div className="mb-3">
            <label htmlFor="movieTitle" className="form-label">
              Movie Title
            </label>
            <input
              type="text"
              placeholder="Please search for a movie title"
              className="form-control"
              id="movieTitle"
              aria-describedby="movieTitle"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
