import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './FetchSlice'

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store;