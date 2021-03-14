import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() =>
    ({
        formControl: {
            width: '100%',
            marginBottom: 16,
        },

        option: {
            display: 'flex',
            alignItems: 'center'
        },

        icon: {
            marginRight: 8,
        }
    }),
)