import { makeStyles } from "@material-ui/core"

export default makeStyles(() => ({
    root: {
        width: '25%',
    },
    
    form: {
        backgroundColor: 'white',
        padding: 16,
        margin: '16px 16px 0 0',
    },

    title: {
        fontSize: 20,
        marginBottom: 8,
    },

    helperText: {
        height: 19,
        marginBottom: 16
    },

    btn: {
        width: '100%',
    }
}))