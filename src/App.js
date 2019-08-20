import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './Components/HeaderComponent';
import SearchComponent from './Components/SearchComponent';
import FooterComponent from './Components/FooterComponent';
import MoviesComponent from './Components/MoviesComponent';

function App() {
  return (
    <div className="App Appcontent container bg-info">
      <div className="content">
        <HeaderComponent />
        <SearchComponent />
        <MoviesComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
