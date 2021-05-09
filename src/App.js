import React, { useState } from 'react';
import './App.css';
import logo from './images/shopify-logo.png';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

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
    if (nominations.length < 5) {
      const newNominations = [...nominations];
      newNominations.push(resultToNominate);
      setNominations(newNominations);
      const updatedSearchResults = results.map(result => {
        const resultToReturn = { ...result };
        if (result.imdbID === resultToNominate.imdbID) {
          resultToReturn.disabled = true;
        }
        return resultToReturn;
      });
      setResults(updatedSearchResults);
      if (newNominations.length === 5) {
        alert(
          'Great! You have nominated 5 movies 🎉. Please go ahead and submit your nomination at the bottom of the screen!'
        );
      }
    } else {
      alert(
        'You cannot nominate more than 5 movies! Please go ahead and submit.'
      );
    }
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
  };

  /*const updateSearchResults = () => {
    // Update Search Results to disable the Nominate Button
    const imdbIDsOfNominations = nominations.map(({ imdbID }) => imdbID);
    const updatedSearchResults = results.map(result => {
      const resultToReturn = { ...result };
      resultToReturn.disabled = imdbIDsOfNominations.includes(result.imdbID);
      return resultToReturn;
    });
    setResults(updatedSearchResults);
  };*/

  const handleSubmitNominations = () => {
    alert('Congratulations! You have submitted your nominations🎉.');
  };

  return (
    <div>
      <div className="App-header">
        The Shoppies
        <img className="header-logo" src={ logo } alt="" />

      </div>
        <SearchBar query={query} setQuery={fetchResults} />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <SearchResults
              query={query}
              results={results}
              nominate={handleNominate}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <Nominations
              nominations={nominations}
              removeNomination={handleRemoveNomination}
            />
          </div>
        </div>
        {nominations.length === 5 ? (
          <div className="row">
            <button
              onClick={handleSubmitNominations}
              type="button"
              className="col btn btn-lg btn-success"
            >
              Submit Nominations
            </button>
          </div>
        ) : null}
    </div>
  );
}
