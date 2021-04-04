import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import categories from '../../app/categories'
import { getIcon } from '../../app/utils'
import useStyles from './styles'

export default function SimpleSelect({ value, onChange }) {
    const classes = useStyles()

    const handleChange = (event) => onChange(event.target.value);

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Категория</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                classes={{ select: classes.option }}
            >
                {Object.values(categories).map(({ name, icon, color }) => {
                    const Icon = getIcon(icon)
                    return (
                        <MenuItem value={name} key={name} className={classes.option}>
                            <Icon htmlColor={color} className={classes.icon}/>
                            <span>{name}</span>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}