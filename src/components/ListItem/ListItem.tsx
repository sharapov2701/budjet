import React from 'react'
import { SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import MuiListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

interface ListItemProps {
    id: number
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    color: string
    category: string
    description?: string
    sum: number
}

const ListItem = ({ id, icon: Icon, color, category, description, sum }: ListItemProps) => {
    return (
        <MuiListItem>
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