import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import LuxonUtils from '@date-io/luxon'
import { DATE_FORMAT } from '../../app/constants'
import useStyles from './styles'

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
                    format={DATE_FORMAT}
                />
            </MuiPickersUtilsProvider>
        </FormControl>
    )
}

export default DatePicker