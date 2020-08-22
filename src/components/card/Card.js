import React from 'react';
import { connect } from 'react-redux';
import { toggleSelected, activHoverSelect, activAllSelected, hover } from '../../actions/actions';

import './card.css';
import logo from '../../images/funbox_logo.png';

const Card = ({ card, toggleSelected, activHoverSelect, activAllSelected, hover }) => {

    let classCard, classCover, classTitle, classCircle, classBuy, classCall, classSlogan, textSlogan, textBottom, textBuy;

    if(card.disable) {
        classCard = 'card card_disabled';
        classCover = 'card__cover';
        classTitle = 'card__title-name card__title-name_disabled';
        classCircle = 'card__circle card__circle_disabled';
        classBuy = 'card__buy card__buy_disabled';
        classCall = 'card__call card__call_disabled';
        classSlogan = 'card__slogan';
        
        textBottom = `Печалька, ${card.name.taste} закончился` 
        textBuy = '';
        textSlogan = 'Сказачное заморское явство';
    } else {
        if(card.selected.activ && card.selected.activHover) {
            classCard = 'card card_selected card_selected_hover';
            classCover = '';
            classTitle = 'card__title-name';
            classCircle = 'card__circle card__circle_selected card__circle_selected_hover';
            classBuy = 'card__buy card__call_selected card__call_selected_hover';
            classCall = 'card__call';
            classSlogan = 'card__slogan card__slogan_selected_hover';
            
            textBottom = card.description;
            textBuy = '';
            
        } else if(card.selected.activ) {
            classCard = 'card-off-hover-defualt card_selected';
            classCover = '';
            classTitle = 'card__title-name';
            classCircle = 'card__circle card__circle_selected';
            classBuy = 'card__buy card__call_selected';
            classCall = 'card__call';
            
            textBottom = card.description;
            textBuy = '';
        } else {
            classCard = 'card';
            classCover = '';
            classTitle = 'card__title-name';
            classCircle = 'card__circle';
            classBuy = 'card__buy';
            classCall = 'card__call';
            
            textBottom = `Чего сидишь? Порадуй котэ, ` ;
            textBuy = 'купить';
        }
    }

    (card.selected.activ && card.selected.activHover && card.selected.hover) ? textSlogan = 'Котэ не одобряет?' : textSlogan = 'Сказачное заморское явство';
    (card.selected.activ && card.selected.activHover && card.selected.hover) ? classSlogan = 'card__slogan card__slogan_selected_hover' :  classSlogan = 'card__slogan';

    return (
        <li className={`card-list__item card-list__item-${card.index}`}>
            <div className={classCard} 
                onMouseEnter={() => (card.selected.activ && card.selected.activHover) ? hover(card.id) : null} 
                onMouseLeave={() => (card.selected.activ) ? activHoverSelect(card.id) : null} 
                onPointerLeave={() => (card.selected.activ && card.selected.activHover && card.selected.hover) ? hover(card.id) : null}
                onClick={ () => (card.disable) ? null : toggleSelected(card.id)}>
                <div className={classCover}></div>
                    <div className="card__wrapper-text">
                        <p className={classSlogan}>{textSlogan}</p>
                        <h2 className={classTitle}>{card.name.brand} 
                            <span className="card__title-name-with">{card.name.taste}</span>
                        </h2>
                        
                        <p className="card__paragraph">{card.portions} порций</p>
                        <p className="card__paragraph">{card.bonus}</p>
                    </div>
                    <p className={classCircle}>{card.mass} <span className="card__circle-kg">кг</span></p>
                    <img src={logo} className="card__logo"/>
                
            </div>
            <p className={classCall}>{textBottom}<span className={classBuy} onClick={() => activAllSelected(card.id)}>{textBuy}</span></p>
        </li>
    )
}

const mapDispathToProps = {
    toggleSelected,
    activHoverSelect,
    activAllSelected,
    hover
}

export default connect(null, mapDispathToProps)(Card);