import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

interface SumFieldProps {
    value: string
    onChange: Function
}

const SumField = ({ value, onChange }: SumFieldProps) => {
    const classes = useStyles()
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <TextField value={value} className={classes.field} onChange={handleChange} label='Сумма' autoFocus />
    )
}

export default SumField