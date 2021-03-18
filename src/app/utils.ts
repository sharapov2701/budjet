import { DateTime } from 'luxon'
import { Operation, GroupedOperations, CategoryIcon } from './types'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi'
import { Clothes } from '../icons'

export const sortDates = (a: Operation, b: Operation) => DateTime.fromFormat(b.date, "dd.MM.yyyy").toSeconds() - DateTime.fromFormat(a.date, "dd.MM.yyyy").toSeconds()

export const groupOperationsByDate = (operations: Operation[]): GroupedOperations => {
    const result: GroupedOperations = {}
    operations.forEach(operation => {
        if (result[operation.date]) {
            result[operation.date] = [...result[operation.date], operation]
        } else {
            result[operation.date] = [operation]
        }
    })
    return result
}

export const getIcon = (icon: CategoryIcon) => {
    switch (icon) {
        case 'DirectionsBusIcon':
            return DirectionsBusIcon
        case 'ShoppingCartIcon':
            return ShoppingCartIcon
        case 'LocalTaxiIcon':
            return LocalTaxiIcon
        case 'Clothes':
            return Clothes
    }
}