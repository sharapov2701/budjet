import { DateTime } from 'luxon'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi'
import { DATE_FORMAT } from './constants'
import { Clothes } from '../icons'

export const sortOperationsByDate = (operations) => {
    return [...operations].sort((a, b) => (
        DateTime
            .fromFormat(b.date, DATE_FORMAT)
            .toSeconds()
        - DateTime
            .fromFormat(a.date, DATE_FORMAT)
            .toSeconds()
    ))
}

export const groupOperationsByDate = (operations) => {
    const result = {}
    operations.forEach(operation => {
        if (result[operation.date]) {
            result[operation.date] = [...result[operation.date], operation]
        } else {
            result[operation.date] = [operation]
        }
    })
    return result
}

export const getIcon = (icon) => {
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