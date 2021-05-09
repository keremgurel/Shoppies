import React from 'react';
import './index.css';

export default function SearchResults({ query, results, nominate }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          Search Results for "{query}"
        </h6>
        <ul className="list-group">
          {results.map(result => (
            <li className="list-group-item" key={result.imdbID}>
              {result.Title}{' '}
              <button
                type="button"
                className="btn btn-success"
                disabled={result.disabled}
                onClick={() => nominate(result)}
              >
                Nominate
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
