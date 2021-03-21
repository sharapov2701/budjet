import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { groupOperationsByDate, sortOperationsByDate } from '../utils'
import { RootState } from '../store'
import { Operation } from '../types'

const initialState: Operation[] = [
  {
    id: 0,
    category: 'Одежда',
    description: 'Носки',
    sum: 99,
    date: '01.01.2020'
  },
  {
    id: 1,
    category: 'Такси',
    description: 'Было холодно',
    sum: 439,
    date: '01.01.2021'
  },
]

let id = 2

export const operations = createSlice({
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
      return state.filter(operation => operation.id !== action.payload)
    },

    editOperation: (state: Operation[], action: PayloadAction<Operation>) => {
      const { id, ...updates } = action.payload
      const operation = state.findIndex(o => o.id === id)
      if (operation) {
        state[operation] = {...state[operation], ...updates}
      }
    },
  }
})

export const { addOperation, deleteOperation, editOperation } = operations.actions

export const selectUnsortedOperations = (state: RootState) => state.operations

export const selectOperations = createSelector(selectUnsortedOperations, sortOperationsByDate)

export const selectDatedOperations = createSelector(selectOperations, groupOperationsByDate)

export default operations.reducer