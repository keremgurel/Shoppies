import React, { useState } from 'react';
import './App.css';
import logo from './images/shopify-logo.png';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

function App() {
  const [query, setQuery] = useState('The Godfather');         // for query
  const [results, setResults] = useState([]);                  // for results
  const [nominations, setNominations] = useState([]);          // for nominations

  const updateSearchResults = updatedSearchQuery => {
    // update local state to store the search query
    setQuery(updatedSearchQuery);
    // make an API call with the updatedSearchQuery
    fetch(`https://www.omdbapi.com/?s=${updatedSearchQuery}&apikey=e524dabe`)
    .then(res => res.json())
    .then(({ Search }) => {
      if (Search) {
        setResults(Search);
      }
    });
  };

  const handleNominate = (result) => {
    const newNominations = [...nominations];
    newNominations.push(result);
    setNominations(newNominations);

    // Update Search results to disable the nominate button
  };

  const handleRemoveNomination = nominationToRemove => {
    const updatedNominations = nominations.filter(
      nomination => nomination.imdbID !== nominationToRemove.imdbID
    );
  }

  return (
    <div>
        <h1>The Shoppies</h1>
        <img className="header-logo" src={ logo } alt="" />
      <SearchBar 
        query={query}
        setQuery={updateSearchResults} />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <SearchResults 
            query={query} 
            results={results}
            nominations={handleNominate} 
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Nominations 
            nominations={nominations} 
            emoveNomination={handleRemoveNomination} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
