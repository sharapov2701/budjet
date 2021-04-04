import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import LuxonUtils from '@date-io/luxon'
import { DATE_FORMAT } from '../../app/constants'
import useStyles from './styles'

const DatePicker = ({ value, onChange }) => {
    const styles = useStyles()

    const handleChange = (d) => {
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