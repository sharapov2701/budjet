import React, { Fragment, useState } from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import Avatar from '@material-ui/core/Avatar'
import OperationEdit from '../OperationEdit'
import { getIcon } from '../../app/utils'
import useStyles from './styles'

const ListItem = ({ id, icon, color, category, description, sum, date }) => {
    const classes = useStyles()
    const Icon = getIcon(icon)
    const [open, setOpen] = useState(false)
    const values = {
        sum: sum.toString(),
        date,
        category,
        description
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const deleteOperation = (id) => {}
    
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
                    <Delete className={classes.delete} onClick={() => deleteOperation(id)}/>
                </ListItemSecondaryAction>
            </MuiListItem>
        </Fragment>
    )
}

export default ListItem