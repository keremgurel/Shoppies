import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

function App() {
  const [query, setQuery] = useState('');                       // for query
  const [results, setResults] = useState('');                   // for results
  const [nominations, setNominations] = useState([]);           // for nominations


  return (
    <div>
      <h1>The Shoppies</h1>
      <SearchBar query={query} queryChange={setQuery} />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <SearchResults />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Nominations />
        </div>
      </div>
    </div>
  );
}

export default App;
