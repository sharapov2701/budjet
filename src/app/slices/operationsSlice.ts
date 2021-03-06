import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Operation } from '../types'

const initialState: Operation[] = [
  {
    id: 0,
    category: 'Одежда',
    description: 'Носки',
    sum: 99,
    date: '27.01.1996'
  },
  {
    id: 1,
    category: 'Такси',
    description: 'Было холодно',
    sum: 439,
    date: '27.01.1996'
  },
]

let id = 2

export const categoriesSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    addOperation: (state: Operation[], action: PayloadAction<Omit<Operation, 'id'>>) => {
      state.push({
        ...action.payload,
        id: id++
      })
    },

    deleteOperation: (state: Operation[], action: PayloadAction<number>) => { 
      state.filter(operation => operation.id !== action.payload)
    },
  }
})

export const { addOperation, deleteOperation } = categoriesSlice.actions

export const selectOperations = (state: RootState) => Object.values(state.operations)

export default categoriesSlice.reducer