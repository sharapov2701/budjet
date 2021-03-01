import React, { ReactElement } from 'react'
import { listItem } from '../ListItem'
import styles from './list.module.scss'

interface ListProps {
    children: ReactElement<listItem>[]
}

const List = ({ children }: ListProps) => {
    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}

export default List