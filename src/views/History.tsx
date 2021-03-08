import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import DatedOperations from '../components/DatedOperations'
import Button from '@material-ui/core/Button'
import Dialog from '../components/Dialog'

import { useAppSelector } from '../app/hooks'
import { selectOperations } from '../app/slices/operationsSlice'
import { groupOperationsByDate, sortDates } from '../app/utils'

const History = () => {
  const operations = useAppSelector(selectOperations)
  const [open, setOpen] = useState(false)

  const groupedOperations = groupOperationsByDate(operations.sort(sortDates))
  const datedOperations = []
  for (const date in groupedOperations) {
    datedOperations.push(<DatedOperations key={date} date={date} operations={groupedOperations[date]} />)
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Button variant="contained" color='primary' onClick={handleOpen} >
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClose} />
      <List>
        {datedOperations}
      </List>
    </Container>
  );
}

export default History