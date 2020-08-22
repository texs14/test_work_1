import React from 'react';
import { connect } from 'react-redux';

import './cardList.css';

import Card from '../card/Card';

const CardList = ({ cards }) => 
    <ul className="card-list">
        {
            cards.map(card => <Card card={card} key={card.id}/>)
        }
    </ul>

const mapStateToProps = ({ cards }) => {
    return {
        cards
    }
}

export default connect(mapStateToProps, null)(CardList);