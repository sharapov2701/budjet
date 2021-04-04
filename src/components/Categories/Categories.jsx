import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import categories from '../../app/categories'
import Category from '../Category'
import useStyles from './styles'

const Categories = ({ value, onChange }) => {
    const classes = useStyles()

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <FormControl component='fieldset' className={classes.root}>
            <FormLabel component='legend'>Категория</FormLabel>
            <RadioGroup className={classes.categories} onChange={handleChange} value={value}>
                {Object.values(categories).map(category => <Category key={category.name} {...category}/>)}
            </RadioGroup>
        </FormControl>
    )
}

export default Categories