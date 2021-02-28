import React from 'react'
import ListItem from './components/ListItem'
import Sport from './icons/Sport'

function App() {
  return (
    <>
      <ListItem Icon={Sport} color='red' category='Спорт' description='Абонемент на 6 мес.' sum={4999} />
      <ListItem Icon={Sport} color='green' category='Спорт' description='Абонемент на 6 мес.' sum={4999} />
    </>
  );
}

export default App;
