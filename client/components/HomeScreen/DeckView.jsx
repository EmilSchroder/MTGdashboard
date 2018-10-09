import React from 'react'
import { connect } from 'react-redux'

import BlankDeck from './BlankDeck'
import SingleDeck from './SingleDeck'

function deckRun(list){
    if (list.length == 0){
        return <BlankDeck />
    } else {
        let allDecks = list.map(deck => <SingleDeck image={deck.image} name={deck.name} desc={deck.description} />)
        return allDecks
    }
}

const DeckView = (props) => (
    <div>
        {deckRun(props.decks)}
    </div>
)


function mapStateToProps(state){
    return {
        decks: state.decks.decks
    }
}

export default connect(mapStateToProps)(DeckView)