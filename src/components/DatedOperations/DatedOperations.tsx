import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Operation from '../Operation'

import { Operation as OperationType } from '../../app/types'
import { useAppSelector } from '../../app/hooks'
import { selectCategories } from '../../app/slices/categoriesSlice'

import useStyles from './styles'

interface DatedOperationsProps {
    date: string
    operations: OperationType[]
}

const DatedOperations = ({ date, operations }: DatedOperationsProps) => {
    const styles = useStyles()
    const categories = useAppSelector(selectCategories)
    
    return (
        <Card className={styles.card}>
            <CardContent>
                <List>
                    {date}
                    {operations.map(item => {
                        const category = categories.filter(c => c.name === item.category)[0]
                        const { icon, color } = category
                        
                        return <Operation key={item.id} {...item} icon={icon} color={color} />
                    })}
                </List>
            </CardContent>
        </Card>
    )
}

export default DatedOperations