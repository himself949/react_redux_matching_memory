import React from 'react';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

const Card = ({ id, contents }) => {

    let cardStyle = 'resting'

    let cardText = (
        <img src={cardLogo} className="logo-placeholder" alt="Card option" />
    );

    return (
        <button className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};

export default Card;