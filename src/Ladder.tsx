import {players, matches} from './data';

function parseResult(result: string) {
    var sets = result.split(" ", 3);
    var wins = 0;
    for (let set of sets) {
        var p1 = set.charAt(0);
        var p2 = set.charAt(2);
        if (p1 > p2) {
            wins++;
        }
    }

    if (wins > 1) {
        return "W";
    } else {
        return "L";
    }

}

export default function Ladder() {

    return (
        <div>
        <h1>{players[matches[2].player1].name} vs. {players[matches[2].player2].name} </h1>

        <h2>Result: {parseResult(matches[2].result)}</h2>
        </div>
    )
};