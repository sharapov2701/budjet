import React, { Fragment, FunctionComponent } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../Header'
import useStyles from './styles'

const Layout: FunctionComponent = ({ children }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <Header />
            <Container>
                <main className={classes.main}>
                    {children}
                </main>
            </Container>
        </Fragment>
    )
}

export default Layout