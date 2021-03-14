import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import { selectCategories } from '../../app/slices/categories'
import { useAppSelector } from '../../app/hooks'
import Category from './Category'
import useStyles from './styles'

interface CategoriesProps {
    value: string
    onChange: Function
}

const Categories = ({ value, onChange }: CategoriesProps) => {
    const classes = useStyles()
    const categories = useAppSelector(selectCategories)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <FormControl component='fieldset' className={classes.root}>
            <FormLabel component='legend'>Категория</FormLabel>
            <RadioGroup className={classes.categories} onChange={handleChange} value={value}>
                {categories.map(category => <Category key={category.name} {...category}/>)}
            </RadioGroup>
        </FormControl>
    )
}

export default Categories