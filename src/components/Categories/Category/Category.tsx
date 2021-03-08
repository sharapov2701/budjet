import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Avatar from '@material-ui/core/Avatar'
import grey from '@material-ui/core/colors/grey'
import { Category as CategoryProps } from '../../../app/types'
import useStyles from './styles'

const Category = ({ name, color, icon: Icon }: CategoryProps) => {
    const styles = useStyles()

    return (
        <FormControlLabel
            className={styles.category}
            value={name}
            label={<span className={styles.name}>{name}</span>}
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