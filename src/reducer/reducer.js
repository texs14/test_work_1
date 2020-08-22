import initialState from './initialState';

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'TOGGLE_SELECTED':

            return {
                ...state,
                cards: state.cards.map(card => (card.id === action.payload) ? 
                    {
                        ...card,
                        selected: {
                            activ: !card.selected.activ,
                            activHover: false
                        }
                    } :
                    card)
            }

        case 'ACTIV_HOVER_SELECTED':
            
            return {
                ...state,
                cards: state.cards.map(card => (card.id === action.payload) ? 
                    {
                        ...card,
                        selected: {
                            ...card.selected,
                            activHover: true
                        }
                    } :
                    card)
            }

        case 'ACTIV_ALL_SELECTED':
            console.log('activ')
            return {
                ...state,
                cards: state.cards.map(card => (card.id === action.payload) ? 
                    {
                        ...card,
                        selected: {
                            ...card.selected,
                            activ: true,
                            activHover: true

                        }
                    } :
                    card)
            }

        case 'HOVER':
            return {
                ...state,
                cards: state.cards.map(card => (card.id === action.payload) ? 
                    {
                        ...card,
                        selected: {
                            ...card.selected,
                            hover: !card.selected.hover
                        }
                    } :
                    card)
            }

        default:
            return state;
    }
}



export default reducer;