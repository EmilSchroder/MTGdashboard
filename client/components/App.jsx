import React from 'react'
import { Link, Route } from 'react-router-dom'

import Navigation from './Navigation'
import HomeScreen from './HomeScreen'
import CreationScreen from './CreationScreen';

const App = () => (
  <div className='app-container'>
    <Route path='/' component={Navigation} />
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/create' component={CreationScreen} />
  </div>
)

export default App
