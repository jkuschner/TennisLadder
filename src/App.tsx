import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
          <ul className="nav-bar">
            <li className="nav-bar-element">Ladder</li>
            <li className="nav-bar-element">Match History</li>
            <li className="nav-bar-element">Enter Results</li>
            <li className="nav-bar-element">Login</li>
          </ul>
      </div>

      <table className='u-full-width'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2/1/2024</td>
            <td>Roger Federer</td>
            <td>Novak Djokovic</td>
            <td>6-4 3-6 7-5</td>
          </tr>
          <tr>
            <td>2/2/2024</td>
            <td>Spongebob Squarepants</td>
            <td>Squidward Tentacles</td>
            <td>6-2 6-1</td>
          </tr>
          <tr>
            <td>2/5/2024</td>
            <td>Tennis McTennisface</td>
            <td>Scooby Doo</td>
            <td>0-6 0-6</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
}

export default App;
