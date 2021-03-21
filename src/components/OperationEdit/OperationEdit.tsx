import React from 'react'
import { editOperation } from '../../app/slices/operations'
import { useAppDispatch } from '../../app/hooks'
import OperationForm from '../OperationForm'
import { Operation, OperationValues } from '../../app/types'
import useStyles from './styles'

interface OperationEditProps {
    id: number
    defaultValues: OperationValues
    onSubmit: Function
}

const OperationEdit = ({ id, defaultValues, onSubmit }: OperationEditProps) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const handleSubmit = (values: Omit<Operation, 'id'>) => {
        onSubmit()
        dispatch(editOperation({ id, ...values }))
    }
    
    return (
        <div className={classes.root}>
            <OperationForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                title='Редактировать'
                buttonText='Сохранить'
            />
        </div>
    )
}

export default OperationEdit