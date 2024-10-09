/*
   Game
    -> Board
        -> Square
    -> Hostory
*/
import { useState } from "react";
import calculateWinner from "./helper/calculateWinner";
import Board from "./components/Board";

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    return (
        <div>
            <div>
                <Board />
            </div>
            <div>
                <ol></ol>
            </div>
        </div>
    );
}

export default Game;
