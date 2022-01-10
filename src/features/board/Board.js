import React from 'react';
import { useSelector } from 'react-redux';
import CardRow from '../CardRow/CardRow';
import { selectBoard } from './boardSlice';

const Board = () => {

    const currentBoard = useSelector(selectBoard)
    const numberOfCards = currentBoard.length
    const columns = 4
    const rows = Math.ceil(numberOfCards / columns)

    const getRowCards = (row) => {
        const rowCards = []
        for (let j = 0; j < columns; j++) {
            const cardIndex = row * columns + j
            rowCards.push(currentBoard[cardIndex])
        }
        return rowCards
    }

    let content = []
    for (let row = 0; row < rows; row++) {
        const rowCards = getRowCards(row)
        content.push(
            <CardRow
                key={row}
                cards={rowCards}
            />
        )
    }

    return (
        <div className="cards-container">{content}</div>
    );
};

export default Board;