const toggleSelected = (id) => {
    return {
        type: 'TOGGLE_SELECTED',
        payload: id
    }
}

const activHoverSelect = (id) => {
    return {
        type: 'ACTIV_HOVER_SELECTED',
        payload: id
    }
}

const activAllSelected = (id) => {
    return {
        type: 'ACTIV_ALL_SELECTED',
        payload: id
    }
}

const hover = (id) => {
    return {
        type: 'HOVER',
        payload: id
    }
}

export {
    toggleSelected,
    activHoverSelect,
    activAllSelected,
    hover
};