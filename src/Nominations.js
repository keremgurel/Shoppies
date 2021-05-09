import React from 'react';
import './index.css';

export default function Nominations({ nominations, removeNomination }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Nominations</h6>
        <ul className="list-group">
            <li className="list-group-item">
                An item{' '}
                <button type="button" className="btn btn-danger">
                    Remove
                </button>
            </li>
          </ul>
      </div>
    </div>
  );
}
