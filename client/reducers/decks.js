const initialState = {
    decks: [{
      name: 'Merfolk you up',
      image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card',
      description: 'image not with name'

    }],
    activeDeck: {}
}

const decks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return {...state, decks: [...state.decks, action.newDeck]}

    default:
      return state
  }
}

export default decks
