import React, { useState } from 'react'
import MuiDialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import SumField from '../SumField'
import DescriptionField from '../DescriptionField'
import Categories from '../Categories'
import DatePicker from '../DatePicker'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import useStyles from './styles'
import { useAppDispatch } from '../../app/hooks'
import { addOperation } from '../../app/slices/operationsSlice'

interface DialogProps {
    open: boolean,
    onClose: (event: React.SyntheticEvent) => void | undefined
}

const Dialog = ({ open, onClose }: DialogProps) => {
    const styles = useStyles()
    const [sum, setSum] = useState<number | ''>('')
    const [category, setCategory] = useState<string>('')
    const [date, setDate] = useState<string | null>(new Date().toLocaleDateString())
    const [description, setDescription] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useAppDispatch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!sum) {
            setError(true)
            setHelperText('Укажите сумму')
        } else if (!category) {
            setError(true)
            setHelperText('Укажите категорию')
        } else if (!date) {
            setError(true)
            setHelperText('Укажите дату')
        } else {
            setError(false)
            setHelperText('')
            dispatch(addOperation(
                {
                    sum,
                    category,
                    date,
                    description
                }
            ))
            setSum('')
            setCategory('')
            setDate(null)
            setDescription('')
        }
    }

    return (
        <MuiDialog open={open} onClose={onClose}>
            <DialogTitle className={styles.title}>
                Добавление операции
                <IconButton className={styles.close} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <form className={styles.form} onSubmit={handleSubmit}>
                <SumField value={sum} onChange={setSum} />
                <Categories value={category} onChange={setCategory} />
                <DatePicker value={date} onChange={setDate}/>
                <DescriptionField value={description} onChange={setDescription} />
                <FormHelperText error={error} className={styles.helperText}>
                    {helperText}
                </FormHelperText>
                <Button variant="contained" color='primary' type='submit'>
                    Добавить
                </Button>
            </form>
        </MuiDialog>
    )
}

export default Dialog