import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import * as reducers from "./ducks"

export const store = configureStore({reducer: reducers})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>