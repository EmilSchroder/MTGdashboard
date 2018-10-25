const initialState = {
    searchedCards: [],
    currentDeck: []
}


const creation = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD_TO_DECK':
            return {...state, currentDeck: [...state.currentDeck, action.newCard]}
        case 'REMOVE_CARD_FROM_DECK':
            let swordsToPloughShares = currentDeck.filter(cards => {
                cards.name !== action.removeCard.name
            })
            return {...state, currentDeck: swordsToPloughShares}
        default:
            return state
    }
}

export default creation