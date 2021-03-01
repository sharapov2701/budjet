import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
    children: string
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}

export default Button