import { makeStyles } from "@material-ui/core"

export default makeStyles(() => ({
    category: {
        width: 82,
        height: 82,
        margin: 0
    },

    name: {
        width: 82,
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    }
}))