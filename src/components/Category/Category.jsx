import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import grey from '@material-ui/core/colors/grey'
import Avatar from '@material-ui/core/Avatar'
import Radio from '@material-ui/core/Radio'
import { getIcon } from '../../app/utils'
import useStyles from './styles'

const Category = ({ name, color, icon }) => {
    const classes = useStyles()
    const Icon = getIcon(icon)

    return (
        <FormControlLabel
            className={classes.category}
            value={name}
            label={<span className={classes.name}>{name}</span>}
            labelPlacement='bottom'
            control={
                <Radio
                    color='primary'
                    icon={
                        <Avatar style={{ backgroundColor: grey[500] }}>
                            <Icon />
                        </Avatar>
                    }
                    checkedIcon={
                        <Avatar style={{ backgroundColor: color }}>
                            <Icon />
                        </Avatar>
                    }
                />
            }
        />
    )
}

export default Category