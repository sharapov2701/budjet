import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import operations from './slices/operations'

export const store = configureStore({
  reducer: {
    categories,
    operations
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch