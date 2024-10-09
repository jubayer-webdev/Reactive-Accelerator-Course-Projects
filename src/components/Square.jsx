import React from "react";

const Square = ({ value, onSquareClick }) => {
    return (
        <button
            className="bg-white border border-gray-400 size-12 m-1 leading-9 text-lg"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
};

export default Square;
