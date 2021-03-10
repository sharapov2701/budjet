import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
        display: 'none',

        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}))