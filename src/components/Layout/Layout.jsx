import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../Header'
import useStyles from './styles'

const Layout = ({ children }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <Header />
            <Container className={classes.container}>
                <main className={classes.main}>
                    {children}
                </main>
            </Container>
        </Fragment>
    )
}

export default Layout