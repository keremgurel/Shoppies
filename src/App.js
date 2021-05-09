import React, { useState } from 'react';
import './App.css';
import logo from './images/shopify-logo.png';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

function App() {
  const [query, setQuery] = useState(' ');         // for query
  const [results, setResults] = useState([]);                  // for results
  const [nominations, setNominations] = useState([]);          // for nominations

  const fetchResults = updatedSearchQuery => {
    // Update local state to store the search Query
    setQuery(updatedSearchQuery);
    // Make an API Call with the updatedSearchQuery.
    fetch(`https://www.omdbapi.com/?s=${updatedSearchQuery}&apikey=e524dabe`)
      .then(res => res.json())
      .then(({ Search }) => {
        // Update local state to store the Search Results.
        if (Search) {
          setResults(Search);
          /* setTimeout(() => {
            updateSearchResults();
          }, 1000); */
        }
      });
  };

  const handleNominate = resultToNominate => {
    const newNominations = [...nominations];
    newNominations.push(resultToNominate);
    setNominations(newNominations);
    // Update Search results to disable the nominate button
    const updatedSearchResults = results.map(result => {
      const resultToReturn = { ...result };
      if (result.imdbID === resultToNominate.imdbID) {
        resultToReturn.disabled = true;
      }
      return resultToReturn;
    });
    setResults(updatedSearchResults);
  };

  const handleRemoveNomination = nominationToRemove => {
    const updatedNominations = nominations.filter(
      nomination => nomination.imdbID !== nominationToRemove.imdbID
    );
    setNominations(updatedNominations);
    const updatedSearchResults = results.map(result => {
      const resultToReturn = { ...result };
      if (result.imdbID === nominationToRemove.imdbID) {
        resultToReturn.disabled = false;
      }
      return resultToReturn;
    });
    setResults(updatedSearchResults);

  }

  return (
    <div>
        <h1>The Shoppies</h1>
        <img className="header-logo" src={ logo } alt="" />
      <SearchBar 
        query={query}
        setQuery={fetchResults} />
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
