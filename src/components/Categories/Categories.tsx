import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Category from './Category'

import { useAppSelector } from '../../app/hooks'
import { selectCategories } from '../../app/slices/categoriesSlice'

import useStyles from './styles'

interface CategoriesProps {
    value: string
    onChange: Function
}

const Categories = ({ value, onChange }: CategoriesProps) => {
    const styles = useStyles()
    const categories = useAppSelector(selectCategories)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <FormControl component='fieldset' className={styles.root}>
            <FormLabel component='legend'>Категория</FormLabel>
            <RadioGroup className={styles.categories} onChange={handleChange} value={value}>
                {categories.map(category => <Category {...category}/>)}
            </RadioGroup>
        </FormControl>
    )
}

export default Categories