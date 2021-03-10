import React from 'react'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import DatedOperations from '../components/DatedOperations'

import { useAppSelector } from '../app/hooks'
import { selectOperations } from '../app/slices/operationsSlice'
import { groupOperationsByDate, sortDates } from '../app/utils'
import Header from '../components/Header'

const History = () => {
  const operations = useAppSelector(selectOperations)

  const groupedOperations = groupOperationsByDate(operations.sort(sortDates))
  const datedOperations = []
  for (const date in groupedOperations) {
    datedOperations.push(<DatedOperations key={date} date={date} operations={groupedOperations[date]} />)
  }


  return (
    <Container>
      <Header />
      <List>
        {datedOperations}
      </List>
    </Container>
  );
}

export default History