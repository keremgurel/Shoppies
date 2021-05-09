import React from 'react';
import '../index.css';

export default function Nominations({ nominations, removeNomination }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Nominations</h6>
        <ul className="list-group">
          {nominations.map(nomination => (
            <li className="list-group-item" key={nomination.imdbID}>
              {nomination.Title}{' '}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeNomination(nomination)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
