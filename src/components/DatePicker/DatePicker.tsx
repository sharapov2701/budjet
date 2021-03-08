import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import LuxonUtils from '@date-io/luxon'
import useStyles from './styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

interface DatePickerProps {
    value: MaterialUiPickersDate
    onChange: Function
}

const DatePicker = ({ value, onChange }: DatePickerProps) => {
    const styles = useStyles()

    const handleChange = (d: MaterialUiPickersDate, v: string | null | undefined) => {
        if (d && d.isValid) {
            onChange(d)
        } else {
            onChange('')
        }
    }

    return (
        <FormControl component='fieldset' className={styles.field}>
            <FormLabel component='legend'>Дата</FormLabel>
            <MuiPickersUtilsProvider utils={LuxonUtils} locale='ru'>
                <KeyboardDatePicker
                    value={value}
                    onChange={handleChange}
                    format={'dd.MM.yyyy'}
                />
            </MuiPickersUtilsProvider>
        </FormControl>
    )
}

export default DatePicker