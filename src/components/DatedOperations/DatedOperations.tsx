import React from 'react'
import List from '@material-ui/core/List'
import { DateTime } from 'luxon'
import { selectCategories } from '../../app/slices/categories'
import { Operation as OperationType } from '../../app/types'
import { DATE_FORMAT } from '../../app/constants'
import { useAppSelector } from '../../app/hooks'
import Operation from '../Operation'
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
                
                return (
                    <Operation
                        {...item}
                        key={item.id}
                        icon={icon}
                        color={color}
                        date={DateTime.fromFormat(item.date, DATE_FORMAT)}
                    />
                )
            })}
        </List>
    )
}

export default DatedOperations