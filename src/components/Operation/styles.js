import { makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { red } from "@material-ui/core/colors"

export default makeStyles(() => ({
    operation: {
        '&:hover': {
            backgroundColor: grey[200],
            cursor: 'pointer',
        }
    },
    
    right: {
        display: 'flex',
        alignItems: 'center',
    },

    delete: {
        fill: grey[500],

        '&:hover': {
            fill: red[500],
            cursor: 'pointer',
        }
    }
}))