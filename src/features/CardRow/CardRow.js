import React from 'react';
import Card from '../Card/Card';

const CardRow = ({ cards }) => {


    const content = cards.map(card =>
        <Card
            key={card.id}
            id={card.id}
            contents={card.contents}
        />)

    return <>{content}</>;
};

export default CardRow;