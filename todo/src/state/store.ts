import { configureStore } from '@reduxjs/toolkit'
import dbSlice from './dbSlice'
import completedSlice from './completedSlice'

export const store = configureStore({
  reducer: {
    db: dbSlice,
    completed: completedSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch