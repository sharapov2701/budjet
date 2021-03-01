import React from 'react'
import List from './components/List'
import ListItem from './components/ListItem'
import Button from './components/Button'
import Sport from './icons/Sport'

const items = [
  {
    Icon: Sport,
    color: 'red',
    category: 'Спорт',
    description: 'Абонемент на 6 мес.',
    sum: 4999
  },
  {
    Icon: Sport,
    color: 'green',
    category: 'Спорт',
    description: 'Абонемент на 6 мес.',
    sum: 4999
  },
]

function App() {
  return (
    <>
      <Button>Добавить</Button>
      <List>
        {items.map(item => <ListItem {...item} />)}
      </List>
    </>
  );
}

export default App;
