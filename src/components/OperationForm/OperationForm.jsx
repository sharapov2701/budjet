import React, { useReducer } from 'react'
import Button from '@material-ui/core/Button'
import { DateTime } from 'luxon'
import DescriptionField from '../DescriptionField'
import { DATE_FORMAT } from '../../app/constants'
import DatePicker from '../DatePicker'
import SumField from '../SumField'
import Select from '../Select'
import useStyles from './styles'

const initialValues = {
    sum: '',
    category: '',
    date: DateTime.now(),
    description: ''
}

const OperationForm = ({ onSubmit, title, buttonText, defaultValues }) => {
    const classes = useStyles()
    const reducer = (state, { type, payload }) => ({ ...state, [type]: payload })
    const [state, dispatch] = useReducer(reducer, defaultValues || initialValues)
    const setSum = (value) => dispatch({ type: 'sum', payload: value})
    const setDate = (value) => dispatch({ type: 'date', payload: value})
    const setCategory = (value) => dispatch({ type: 'category', payload: value})
    const setDescription = (value) => dispatch({ type: 'description', payload: value})

    const handleSubmit = (event) => {
        event.preventDefault()

        if (state.sum && state.category && state.date) {
            onSubmit({
                sum: +state.sum,
                category: state.category,
                date: state.date.toFormat(DATE_FORMAT),
                description: state.description
            })
            setSum('')
            setCategory('')
            setDescription('')
        }
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <p className={classes.title}>{title}</p>
            <SumField value={state.sum} onChange={setSum} />
            <Select value={state.category} onChange={setCategory} />
            <DatePicker value={state.date} onChange={setDate}/>
            <DescriptionField value={state.description} onChange={setDescription} />
            <Button className={classes.btn} variant="contained" color='primary' type='submit'>
                {buttonText}
            </Button>
        </form>
    )
}

export default OperationForm