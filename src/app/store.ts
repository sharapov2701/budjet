import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import categoriesSlice from './slices/categoriesSlice'
import operationsSlice from './slices/operationsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    categories: categoriesSlice,
    operations: operationsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch