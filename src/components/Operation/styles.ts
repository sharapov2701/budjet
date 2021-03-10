import { makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

export default makeStyles(() => ({
    operation: {
        '&:hover': {
            backgroundColor: grey[200],
            cursor: 'pointer',
        }
    },
}))