import React from 'react';
import './index.css';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="movieTitle" className="form-label">
              Movie Title
            </label>
            <input
              type="text"
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
