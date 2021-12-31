import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, resetCards, selectMatchedIDs, selectVisibleIDs } from '../Board/boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

const Card = ({ id, contents }) => {

    const dispatch = useDispatch()
    const visibleIDs = useSelector(selectVisibleIDs)
    const matchedIDS = useSelector(selectMatchedIDs)

    const flipHandler = (id) => {
        dispatch(flipCard(id))
    }

    const resetHandler = () => {
        dispatch(resetCards())
    }

    let cardStyle = 'resting'
    let click = () => { flipHandler(id) };

    let cardText = (
        <img src={cardLogo} className="logo-placeholder" alt="Card option" />
    )

    if (visibleIDs.includes(id) || matchedIDS.includes(id)) {
        cardText = contents
        click = () => { }
    }

    if (matchedIDS.includes(id)) {
        cardStyle = 'matched'
    }

    if (visibleIDs.length === 2) {
        click = () => { resetHandler() }
    }

    if (visibleIDs.length === 2 && !matchedIDS.includes(id)) {
        cardStyle = 'no-match'
    }

    return (
        <button onClick={click} className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};

export default Card;