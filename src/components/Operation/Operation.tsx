import React from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListItem from '@material-ui/core/ListItem'
import { SvgIconTypeMap } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import useStyles from './styles'

interface ListItemProps {
    id: number
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
    color: string
    category: string
    description?: string
    sum: number
}

const ListItem = ({ id, icon: Icon, color, category, description, sum }: ListItemProps) => {
    const classes = useStyles()
    
    return (
        <MuiListItem className={classes.operation}>
            <ListItemAvatar>
                <Avatar style={{ backgroundColor: color }}>
                    <Icon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={category} secondary={description} />
            <ListItemSecondaryAction>
                {sum.toLocaleString()} ₽
            </ListItemSecondaryAction>
        </MuiListItem>
    )
}

export default ListItem