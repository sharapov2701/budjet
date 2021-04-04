import React from 'react'
import OperationForm from '../OperationForm'
import { firestore } from '../../app/firebase'
import useStyles from './styles'

const OperationAdd = () => {
    const classes = useStyles()
    const operationsRef = firestore.collection('operations')

    const handleSubmit = async (values) => {
        await operationsRef.add(values)
    }
    
    return (
        <div className={classes.root}>
            <OperationForm onSubmit={handleSubmit} title='Добавить операцию' buttonText='Добавить' />
        </div>
    )
}

export default OperationAdd