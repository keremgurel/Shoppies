import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  return (
    <div>
      <h1>The Shoppies</h1>
      <SearchBar />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <SearchResults />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" />
      </div>
    </div>
  );
}

export default App;
