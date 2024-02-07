import {players, matches} from './data';

export default function MatchHistory() {
    const tableEntries = matches.map(match =>
        <tr>
            <td>{match.date}</td>
            <td>{players[match.player1].name}</td>
            <td>{players[match.player2].name}</td>
            <td>{match.result}</td>
        </tr>
    );

    return (
        <table className='u-full-width'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>{tableEntries}</tbody>
        </table>
    );

};