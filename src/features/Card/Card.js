import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, selectMatchedIDs, selectVisibleIDs } from '../board/boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

const Card = ({ id, contents }) => {

    const dispatch = useDispatch()
    const visibleIDs = useSelector(selectVisibleIDs)
    const matchedIDS = useSelector(selectMatchedIDs)

    const flipHandler = (id) => {
        dispatch(flipCard(id))
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
        click = () => { }
    }

    return (
        <button onClick={click} className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};

export default Card;