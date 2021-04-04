import React from 'react'
import List from '@material-ui/core/List'
import { DateTime } from 'luxon'
import { DATE_FORMAT } from '../../app/constants'
import categories from '../../app/categories'
import Operation from '../Operation'
import useStyles from './styles'

const DatedOperations = ({ date, operations }) => {
    const classes = useStyles()
    
    return (
        <List className={classes.root}>
            <span className={classes.date}>{date}</span>
            {operations.map(item => {
                const category = categories[item.category]
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