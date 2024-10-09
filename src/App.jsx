/*
   Game
    -> Board
        -> Square
    -> History
*/
import { useState } from "react";
import calculateWinner from "./helper/calculateWinner";
import Board from "./components/Board";
import History from "./components/History";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    // const currentSquares = history[history.length - 1];
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        setXIsNext(!xIsNext);
        // setHistory([...history, nextSquares]);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const handleRestart = () => {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
        setCurrentMove(0);
    };

    return (
        <div className="flex justify-center p-4">
            <div className="mr-16">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
                <button
                    onClick={handleRestart}
                    type="button"
                    className="mt-3 px-2.5 py-2 leading-tight border rounded-lg bg-green-300"
                >
                    Start new game
                </button>
            </div>

            <div>
                <History
                    history={history}
                    setCurrentMove={setCurrentMove}
                    setXIsNext={setXIsNext}
                />
            </div>
        </div>
    );
}

export default Game;
