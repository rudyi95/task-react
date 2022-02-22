import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { questionAPI } from 'services/QuestionService'
// import { wordAPI } from 'services/WordService'
import questionReducer from './reducers/QuestionSlice'
import wordReduser from './reducers/WordSlice'

const rootReducer = combineReducers({
  questionReducer,
  wordReduser,
  // [questionAPI.reducerPath]: questionAPI.reducer,
  // [wordAPI.reducerPath]: wordAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(questionAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
