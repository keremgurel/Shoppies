/* eslint-disable react/style-prop-object */
import React from 'react';
import './index.css';

export default function SearchResults() {
    return (
      <div className="card">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            Search Results for "ram"
          </h6>
          <ul className="list-group">
            <li className="list-group-item">
                An item{' '}
                <button type="button" className="btn btn-success">
                    Nominate
                </button>
            </li>
            <li className="list-group-item">
                An item{' '}
                <button type="button" className="btn btn-success">
                    Nominate
                </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }