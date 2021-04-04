import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

const Dropdown = ({ children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button onClick={handleClick}>
                {children}
                <ArrowDropDownIcon />
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Dropdown