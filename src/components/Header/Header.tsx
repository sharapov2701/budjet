import React, { useState } from 'react'
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Dialog from '../Dialog'
import Dropdown from '../Dropdown'

const Header = () => {
    const styles = useStyles()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className={styles.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Dropdown>Тип операции</Dropdown>
                    <Dropdown>Период</Dropdown>
                    <Dropdown>Категория</Dropdown>
                    <Dropdown>Сумма</Dropdown>
                    <Dropdown>Поиск</Dropdown>
                    <div className={styles.grow} />
                    <Button variant="contained" color='primary' onClick={handleOpen}>
                        Добавить
                    </Button>
                    <Dialog open={open} onClose={handleClose} />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header