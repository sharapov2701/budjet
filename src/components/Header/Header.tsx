import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dropdown from '../Dropdown'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
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
                    <div className={classes.grow} />
                    <Button variant="contained" color='primary' >
                        Добавить
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header