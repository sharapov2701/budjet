import React, { useReducer } from 'react'
import Button from '@material-ui/core/Button'
import { DateTime } from 'luxon'
import { addOperation } from '../../app/slices/operations'
import { useAppDispatch } from '../../app/hooks'
import DescriptionField from '../DescriptionField'
import DatePicker from '../DatePicker'
import SumField from '../SumField'
import Select from '../Select'
import useStyles from './styles'

interface State {
    sum: string,
    category: string,
    date: DateTime,
    description: string
}

interface Action {
    type: string,
    payload: unknown
}

const FormAddOperation = () => {
    const classes = useStyles()

    const reducer = (state: State, { type, payload }: Action): State => ({ ...state, [type]: payload })
    const initialState = {
        sum: '',
        category: '',
        date: DateTime.now(),
        description: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const setSum = (value: string) => dispatch({ type: 'sum', payload: value})
    const setDate = (value: DateTime) => dispatch({ type: 'date', payload: value})
    const setCategory = (value: string) => dispatch({ type: 'category', payload: value})
    const setDescription = (value: string) => dispatch({ type: 'description', payload: value})
    const reduxDispatch = useAppDispatch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (state.sum && state.category && state.date) {
            reduxDispatch(addOperation(
                {
                    sum: +state.sum,
                    category: state.category,
                    date: state.date.toFormat('dd.MM.yyyy'),
                    description: state.description
                }
            ))
            setSum('')
            setCategory('')
            setDescription('')
        }
    }

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <p className={classes.title}>Добавить операцию</p>
                <SumField value={state.sum} onChange={setSum} />
                <Select value={state.category} onChange={setCategory} />
                <DatePicker value={state.date} onChange={setDate}/>
                <DescriptionField value={state.description} onChange={setDescription} />
                <Button className={classes.btn} variant="contained" color='primary' type='submit'>
                    Добавить
                </Button>
            </form>
        </div>
    )
}

export default FormAddOperation