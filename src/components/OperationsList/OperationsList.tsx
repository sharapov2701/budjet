import React from 'react'
import List from '@material-ui/core/List'
import { groupOperationsByDate, sortDates } from '../../app/utils'
import { selectOperations } from '../../app/slices/operations'
import { useAppSelector } from '../../app/hooks'
import DatedOperations from '../DatedOperations'
import useStyles from './styles'

const OperationsList = () => {
    const classes = useStyles()
    
    const operations = useAppSelector(selectOperations)
    const groupedOperations = groupOperationsByDate(operations.sort(sortDates))
    const datedOperations = []
    for (const date in groupedOperations) {
      datedOperations.push(<DatedOperations key={date} date={date} operations={groupedOperations[date]} />)
    }

    return (
        <div className={classes.root}>
            <List className={classes.list}>
                {datedOperations}
            </List>
        </div>
    )
}

export default OperationsList