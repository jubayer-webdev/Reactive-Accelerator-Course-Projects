import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../helper/calculateWinner";

const Board = ({ xIsNext, currentSquares, onPlay }) => {
    const winner = calculateWinner(currentSquares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    function handleSquareClick(i) {
        if (currentSquares[i] || calculateWinner(currentSquares)) {
            return;
        }

        const nextSquares = currentSquares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);

        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);

        [
            // before first move
            [null, null, null, null, null, null, null, null, null],
            // After first move
            [null, null, null, null, "X", null, null, null, null],
            // After second move
            [null, null, null, null, "X", null, null, null, "O"],
            // ...
        ];
    }

    return (
        <>
            <div>{status}</div>
            <div className="flex">
                <Square
                    value={currentSquares[0]}
                    onSquareClick={() => handleSquareClick(0)}
                />
                <Square
                    value={currentSquares[1]}
                    onSquareClick={() => handleSquareClick(1)}
                />
                <Square
                    value={currentSquares[2]}
                    onSquareClick={() => handleSquareClick(2)}
                />
            </div>

            <div className="flex">
                <Square
                    value={currentSquares[3]}
                    onSquareClick={() => handleSquareClick(3)}
                />
                <Square
                    value={currentSquares[4]}
                    onSquareClick={() => handleSquareClick(4)}
                />
                <Square
                    value={currentSquares[5]}
                    onSquareClick={() => handleSquareClick(5)}
                />
            </div>

            <div className="flex">
                <Square
                    value={currentSquares[6]}
                    onSquareClick={() => handleSquareClick(6)}
                />
                <Square
                    value={currentSquares[7]}
                    onSquareClick={() => handleSquareClick(7)}
                />
                <Square
                    value={currentSquares[8]}
                    onSquareClick={() => handleSquareClick(8)}
                />
            </div>
        </>
    );
};

export default Board;
