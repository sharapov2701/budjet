import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import History from './pages/History'
import Income from './pages/Income'
import Expenses from './pages/Expenses'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={History} exact />
      <Route path='/income' component={Income} exact />
      <Route path='/expenses' component={Expenses} exact />
    </BrowserRouter>
  )
}

export default App
