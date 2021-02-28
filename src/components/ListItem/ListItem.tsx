import React from 'react'
import styles from './listItem.module.scss'

interface ListItemProps {
    Icon: any
    color: string
    category: string
    description?: string
    sum: number
}

const ListItem = ({ Icon, color, category, description, sum }: ListItemProps) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.left}>
                <div className={styles.iconOuter} style={{ backgroundColor: color }}>
                    <Icon className={styles.icon}/>
                </div>
                <div className={styles.textBlock}>
                    <p className={styles.category}>{category}</p>
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            </div>
            <p className={styles.sum}>{sum.toLocaleString()} ₽</p>
        </div>
    )
}

export default ListItem