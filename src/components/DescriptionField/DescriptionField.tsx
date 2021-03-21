import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

interface DescriptionFieldProps {
    value: string | undefined
    onChange: Function
}

const DescriptionField = ({ value, onChange }: DescriptionFieldProps) => {
    const classes = useStyles()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <TextField value={value} className={classes.field} onChange={handleChange} label='Примечание' />
    )
}

export default DescriptionField