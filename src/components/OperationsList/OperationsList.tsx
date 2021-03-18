import React from 'react'
import List from '@material-ui/core/List'
import { selectDatedOperations } from '../../app/slices/operations'
import { useAppSelector } from '../../app/hooks'
import DatedOperations from '../DatedOperations'
import useStyles from './styles'

const OperationsList = () => {
    const classes = useStyles()
    const operations = useAppSelector(selectDatedOperations)

    return (
        <div className={classes.root}>
            <List className={classes.list}>
                {Object.keys(operations).map(date => <DatedOperations key={date} date={date} operations={operations[date]} />)}
            </List>
        </div>
    )
}

export default OperationsList