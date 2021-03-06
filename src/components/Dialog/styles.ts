import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    form: {
        padding: '0 24px 16px'
    },

    title: {
        display: 'flex',
        alignItems: 'center',
    },

    helperText: {
        height: 19,
        marginBottom: 16
    },

    close: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    }
}))