import React, { Fragment, useState } from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import Avatar from '@material-ui/core/Avatar'
import { DateTime } from 'luxon'
import { CategoryIcon, OperationValues } from '../../app/types'
import { deleteOperation } from '../../app/slices/operations'
import { useAppDispatch } from '../../app/hooks'
import OperationEdit from '../OperationEdit'
import { getIcon } from '../../app/utils'
import useStyles from './styles'

interface ListItemProps {
    id: number
    icon: CategoryIcon
    color: string
    category: string
    description?: string
    sum: number
    date: DateTime
}

const ListItem = ({ id, icon, color, category, description, sum, date }: ListItemProps) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const Icon = getIcon(icon)
    const [open, setOpen] = useState(false)
    const values: OperationValues = {
        sum: sum.toString(),
        date,
        category,
        description
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    return (
        <Fragment>
            <Dialog open={open} onClose={handleClose}>
                <OperationEdit id={id} defaultValues={values} onSubmit={handleClose} />
            </Dialog>
            <MuiListItem className={classes.operation} onClick={handleOpen}>
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
        </Fragment>
    )
}

export default ListItem