import { blue, red, green, yellow } from '@material-ui/core/colors'

const categories = {
    'Одежда': {
        name: 'Одежда',
        icon: 'Clothes',
        color: blue[500]
    },
    'Товары и услуги': {
        name: 'Товары и услуги',
        icon: 'ShoppingCartIcon',
        color: green[500]
    },
    'Транспорт': {
        name: 'Транспорт',
        icon: 'DirectionsBusIcon',
        color: red[500]
    },
    'Такси': {
        name: 'Такси',
        icon: 'LocalTaxiIcon',
        color: yellow['A700']
    }
}

export default categories