export interface Category {
    name: string,
    icon: CategoryIcon,
    color: string
}

export type CategoryIcon = 'DirectionsBusIcon' | 'ShoppingCartIcon' | 'LocalTaxiIcon' | 'Clothes'

export interface Operation {
    id: number,
    sum: number,
    category: string,
    date: string,
    description?: string,
}

export interface GroupedOperations { [key: string]: Operation[] }