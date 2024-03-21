import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MatchHistory from './MatchHistory';
import Ladder from './Ladder';
import ResultsForm from './ResultsForm';
import Login from './Login';



function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Ladder/>;
      break;
  
    case "/matchHistory":
      component = <MatchHistory/>;
      break;
    
    case "/enterResults":
      component = <ResultsForm/>;
      break;

    case "/login":
      component = <Login/>;
      break;

    default:
      component = <Ladder/>;
      break;
  }
  return (
    <body>
      <NavBar/>
      <div className="container">{component}</div>
    </body>
  );
}

export default App;

