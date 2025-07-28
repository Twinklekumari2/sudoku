import {configureStore} from '@reduxjs/toolkit'
import ModeReducer from './features/Mode/ModeSlice'

export const store = configureStore({
    reducer: {
        mode: ModeReducer
    }
})