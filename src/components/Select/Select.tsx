import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useAppSelector } from '../../app/hooks'
import { selectCategories } from '../../app/slices/categories'
import useStyles from './styles'

interface SelectProps {
    value: string
    onChange: Function
}

export default function SimpleSelect({ value, onChange }: SelectProps) {
    const classes = useStyles()
    const categories = useAppSelector(selectCategories)


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        onChange(event.target.value as string);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Категория</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                classes={{ select: classes.option }}
            >
                {categories.map(({ name, icon: Icon, color }) => (
                    <MenuItem value={name} key={name} className={classes.option}>
                        <Icon htmlColor={color} className={classes.icon}/>
                        <span>{name}</span>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}