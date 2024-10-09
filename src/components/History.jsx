import React from "react";

const History = ({ history, setCurrentMove, setXIsNext }) => {
    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((square, move) => {
        let description = `Go to start the game`;
        if (move > 0) description = `Go to the move # ${move}`;

        return (
            <li
                key={move}
                className="odd:bg-lime-500 bg-sky-500 text-white mb-1 p-1 rounded-sm"
            >
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>;
};

export default History;
