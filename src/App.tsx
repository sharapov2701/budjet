import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import History from './views/History'
import Income from './views/Income'
import Expenses from './views/Expenses'

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
