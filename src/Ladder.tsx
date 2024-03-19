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

function addResult(ladder: number[], winner: number, loser: number) {
    var winnerInd = NaN;
    var loserInd = NaN;
    for (let index = 0; index < ladder.length; index++) {
        if (ladder[index] === winner) {
            winnerInd = index;
        }

        if (ladder[index] === loser) {
            loserInd = index;
        }
    }

    if (Number.isNaN(winnerInd) && Number.isNaN(loserInd)) {
        ladder.push(winner);
        ladder.push(loser);
        return;
    }

    if (Number.isNaN(loserInd)) {
        ladder.push(loser);
        return;
    }

    if (Number.isNaN(winnerInd)) {
        ladder.push(ladder[ladder.length - 1]);
        for (let i = ladder.length - 2; i > loserInd; i--) {
            ladder[i] = ladder[i-1];
        }
        ladder[loserInd] = winner;
        return;
    }

    if (winnerInd > loserInd) {
        for (let i = winnerInd; i > loserInd; i--) {
            ladder[i] = ladder[i-1];
        }
        ladder[loserInd] = winner;
        return;
    }

    return;
}

export default function Ladder() {

    const ladder: number[] = [];
    for (let match of matches) {
        if (parseResult(match.result) === "W") {
            addResult(ladder, match.player1, match.player2);
        } else {
            addResult(ladder, match.player2, match.player1);
        }
    }

    const tableEntries: JSX.Element[] = [];
    for (let i = 0; i < ladder.length; i++) {
        tableEntries.push(
            <tr>
                <td>{i+1}</td>
                <td>{players[ladder[i]].name}</td>
            </tr>
        );
    }

    return (
        <table className='u-full-width'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>{tableEntries}</tbody>
        </table>
    );
};