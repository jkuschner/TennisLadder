import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MatchHistory from './MatchHistory';
import Ladder from './Ladder';



function App() {
  return (
    <body>
      <NavBar/>
      <MatchHistory/>
      <Ladder/>
    </body>
  );
}

export default App;

