import React from 'react'
import List from '@material-ui/core/List'
import Operation from '../Operation'
import { Operation as OperationType } from '../../app/types'
import { useAppSelector } from '../../app/hooks'
import { selectCategories } from '../../app/slices/categories'
import useStyles from './styles'

interface DatedOperationsProps {
    date: string
    operations: OperationType[]
}

const DatedOperations = ({ date, operations }: DatedOperationsProps) => {
    const classes = useStyles()
    const categories = useAppSelector(selectCategories)
    
    return (
        <List className={classes.root}>
            <span className={classes.date}>{date}</span>
            {operations.map(item => {
                const category = categories.filter(c => c.name === item.category)[0]
                const { icon, color } = category
                
                return <Operation key={item.id} {...item} icon={icon} color={color} />
            })}
        </List>
    )
}

export default DatedOperations