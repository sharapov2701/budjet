import React from 'react'
import List from '@material-ui/core/List'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../app/firebase'
import DatedOperations from '../DatedOperations'
import useStyles from './styles'
import { groupOperationsByDate } from '../../app/utils'

const OperationsList = () => {
    const classes = useStyles()
    const operationsRef = firestore.collection('operations')
    const [operations] = useCollectionData(operationsRef)
    const datedOperations = operations && groupOperationsByDate(operations)

    return (
        datedOperations ? 
        <div className={classes.root}>
            <List className={classes.list}>
                {Object.keys(datedOperations).map(date => <DatedOperations key={date} date={date} operations={datedOperations[date]} />)}
            </List>
        </div> : null
    )
}

export default OperationsList