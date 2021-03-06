import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from './components/ListItem'
import Button from '@material-ui/core/Button'
import Dialog from './components/Dialog'

import { useAppSelector } from './app/hooks'
import { selectOperations } from './app/slices/operationsSlice'
import { selectCategories } from './app/slices/categoriesSlice'

function App() {
  const operations = useAppSelector(selectOperations)
  const categories = useAppSelector(selectCategories)
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Button variant="contained" color='primary' onClick={handleOpen} >
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClose} />
      <List>
        {operations.map(item => {
          const category = categories.filter(c => c.name === item.category)[0]
          const { icon, color } = category
          
          return <ListItem key={item.id} {...item} icon={icon} color={color} />
        })}
      </List>
    </Container>
  );
}

export default App;
