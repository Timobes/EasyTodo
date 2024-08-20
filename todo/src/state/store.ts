import { configureStore } from '@reduxjs/toolkit'
import dbSlice from './dbSlice'

export const store = configureStore({
  reducer: {
    db: dbSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch