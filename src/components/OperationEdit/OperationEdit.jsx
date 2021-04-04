import React from 'react'
import OperationForm from '../OperationForm'
import useStyles from './styles'

const OperationEdit = ({ id, defaultValues, onSubmit }) => {
    const classes = useStyles()
    const handleSubmit = (values) => {
        onSubmit()
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