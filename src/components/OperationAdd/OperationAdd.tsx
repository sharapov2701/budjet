import React from 'react'
import { addOperation } from '../../app/slices/operations'
import { useAppDispatch } from '../../app/hooks'
import OperationForm from '../OperationForm'
import { Operation } from '../../app/types'
import useStyles from './styles'

const OperationAdd = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const handleSubmit = (values: Omit<Operation, 'id'>) => dispatch(addOperation(values))
    
    return (
        <div className={classes.root}>
            <OperationForm onSubmit={handleSubmit} title='Добавить операцию' buttonText='Добавить' />
        </div>
    )
}

export default OperationAdd