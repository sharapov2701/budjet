import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Expenses from './pages/Expenses'
import History from './pages/History'
import Income from './pages/Income'
import Auth from './pages/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={History} exact />
      <Route path='/auth' component={Auth} exact />
      <Route path='/income' component={Income} exact />
      <Route path='/expenses' component={Expenses} exact />
    </BrowserRouter>
  )
}

export default App
