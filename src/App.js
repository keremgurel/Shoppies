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

  const updateSearchResults = (updatedSearchQuery) => {
    // update local state to store the search query
    setQuery(updatedSearchQuery);
    // make an API call with the updatedSearchQuery
    fetch(`https://www.omdbapi.com/?s=${updatedSearchQuery}&apikey=e524dabe`)
      .then(res => res.json())
      .then(res => console.log('Got the search results as: ', res));
    // update local state to store the search results
  };

  return (
    <div>
      <div>
        <h1>The Shoppies</h1>
        <img class="header-logo" src={ logo } alt="" />
      </div>
      <SearchBar 
        query={query}
        setQuery={updateSearchResults} />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <SearchResults query={query} />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Nominations />
        </div>
      </div>
    </div>
  );
}

export default App;
