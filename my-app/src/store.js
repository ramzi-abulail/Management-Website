import {configureStore} from "@reduxjs/toolkit"
import taskSlice from '../src/redux/TaskSlice'
import userSlice from '../src/redux/userSlice'

const rootReducer={
    user: userSlice,
    task: taskSlice,
}

const store = configureStore({
    reducer : rootReducer
})

export default store;