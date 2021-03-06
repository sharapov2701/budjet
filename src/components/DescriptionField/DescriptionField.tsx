import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

interface DescriptionFieldProps {
    value: string
    onChange: Function
}

const DescriptionField = ({ value, onChange }: DescriptionFieldProps) => {
    const styles = useStyles()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <TextField value={value} className={styles.field} onChange={handleChange} label='Примечание' />
    )
}

export default DescriptionField