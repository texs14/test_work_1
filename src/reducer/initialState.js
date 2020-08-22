import { v4 } from 'uuid';

const initialState = {
    cards: [
        {
            name: {
                brand: 'Нямушка ',
                taste: 'с фуа-гра'
            },
            portions: 10,
            mass: `0,5`,
            description: `Печень утки разварная с артишоками.`,
            bonus: `мышь в подарок`,
            id: v4(),
            selected: {
                activ: false,
                hoverActiv: false,
                hover: false
            },
            disable: true,
            index: 1
        },
        {
            name: {
                brand: 'Нямушка ',
                taste: 'с рыбой'
            },
            portions: 40,
            mass: `2`,
            description: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
            bonus: `2 мыши в подарок`,
            id: v4(),
            selected: {
                activ: false,
                hoverActiv: false
            },
            disable: false,
            index: 2
        },
        {
            name: {
                brand: 'Нямушка ',
                taste: 'с курой'
            },
            portions: 100,
            mass: `5`,
            description: `Филе из цыплят с трюфелями в бульоне.`,
            bonus: `5 мышь в подарок заказчик доволен`,
            id: v4(),
            selected: {
                activ: false,
                hoverActiv: false
            },
            disable: false,
            index: 3
        }
    ]
};

export default initialState;