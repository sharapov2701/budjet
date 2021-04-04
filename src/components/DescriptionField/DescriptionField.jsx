import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

const DescriptionField = ({ value, onChange }) => {
    const classes = useStyles()
    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <TextField value={value} className={classes.field} onChange={handleChange} label='Примечание' />
    )
}

export default DescriptionField