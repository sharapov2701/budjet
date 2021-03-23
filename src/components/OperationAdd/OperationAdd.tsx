import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import OperationForm from '../OperationForm'
import { Operation } from '../../app/types'
import useStyles from './styles'

const OperationAdd = () => {
    const classes = useStyles()
    const firebase = useFirebase()
    const handleSubmit = (values: Omit<Operation, 'id'>) => firebase.push('operations', values)
    
    return (
        <div className={classes.root}>
            <OperationForm onSubmit={handleSubmit} title='Добавить операцию' buttonText='Добавить' />
        </div>
    )
}

export default OperationAdd