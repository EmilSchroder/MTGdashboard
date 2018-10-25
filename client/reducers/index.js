import {combineReducers} from 'redux'

import decks from './decks'
import creation from './creation'

export default combineReducers({
  decks,
  creation
})
