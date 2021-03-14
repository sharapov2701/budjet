import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Category } from '../types'

import { Clothes } from '../../icons'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi'

import { blue, red, green, yellow } from '@material-ui/core/colors'

const initialState: Category[] = [
  {
    name: 'Одежда',
    icon: Clothes,
    color: blue[500]
  },
  {
    name: 'Товары и услуги',
    icon: ShoppingCartIcon,
    color: green[500]
  },
  {
    name: 'Транспорт',
    icon: DirectionsBusIcon,
    color: red[500]
  },
  {
    name: 'Такси',
    icon: LocalTaxiIcon,
    color: yellow['A700']
  },
]

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.push(action.payload)
    },

    deleteCategory: (state, action: PayloadAction<string>) => { 
      state = state.filter(category => category.name !== action.payload)
    },
  }
})

export const { addCategory, deleteCategory } = categories.actions

export const selectCategories = (state: RootState) => Object.values(state.categories)

export default categories.reducer