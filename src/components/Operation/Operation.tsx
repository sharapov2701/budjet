import React from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'
import Avatar from '@material-ui/core/Avatar'
import { deleteOperation } from '../../app/slices/operations'
import { useAppDispatch } from '../../app/hooks'
import { CategoryIcon } from '../../app/types'
import { getIcon } from '../../app/utils'
import useStyles from './styles'

interface ListItemProps {
    id: number
    icon: CategoryIcon
    color: string
    category: string
    description?: string
    sum: number
}

const ListItem = ({ id, icon, color, category, description, sum }: ListItemProps) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const Icon = getIcon(icon)
    
    return (
        <MuiListItem className={classes.operation}>
            <ListItemAvatar>
                <Avatar style={{ backgroundColor: color }}>
                    <Icon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={category} secondary={description} />
            <ListItemSecondaryAction className={classes.right}>
                <span>{sum.toLocaleString()} ₽</span>
                <Delete className={classes.delete} onClick={() => dispatch(deleteOperation(id))}/>
            </ListItemSecondaryAction>
        </MuiListItem>
    )
}

export default ListItem