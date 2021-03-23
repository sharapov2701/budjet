import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import operations from './slices/operations'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { Category, Operation } from './types'

interface UserProfile {
  email: string
}

// create schema for the DB
interface DBSchema {
  operations: Operation
  [name: string]: any
}
interface Store {
  firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
  operations: Operation[],
  categories: Category[]
  // firestore: FirestoreReducer.Reducer;
}

export const store = configureStore<Store>({
  reducer: {
    categories,
    operations,
    firebase: firebaseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch