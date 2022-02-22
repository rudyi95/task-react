// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { IQuestion } from 'utils/interface'
// import { fetchQuestionTheme } from './ActionCreators'

// interface QuestionState {
//   questionTheme: IQuestion[]
//   isLoading: boolean
//   error: string
// }

// const initialState: QuestionState = {
//   questionTheme: [],
//   isLoading: false,
//   error: '',
// }

// export const questionSlice = createSlice({
//   name: 'question',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchQuestionTheme.fulfilled.type]: (
//       state,
//       action: PayloadAction<IQuestion[]>
//     ) => {
//       state.isLoading = false
//       state.error = ''
//       state.questionTheme = action.payload
//     },
//     [fetchQuestionTheme.pending.type]: (state) => {
//       state.isLoading = true
//     },
//     [fetchQuestionTheme.rejected.type]: (
//       state,
//       action: PayloadAction<string>
//     ) => {
//       state.isLoading = false
//       state.error = action.payload
//     },
//   },
// })

// export default questionSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from 'utils/interface'
import {
  fetchQuestion,
  fetchQuestionTheme,
  updateQuestionStatistics,
} from './ActionCreators'

interface QuestionState {
  question: IQuestion[]
  isLoading: boolean
  error: string
}

const initialState: QuestionState = {
  question: [],
  isLoading: false,
  error: '',
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuestionTheme.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestion[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.question = action.payload
    },
    [fetchQuestionTheme.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchQuestionTheme.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.error = action.payload
    },
    [fetchQuestion.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestion[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.question = action.payload
    },
    [fetchQuestion.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchQuestion.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [updateQuestionStatistics.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestion[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.question = action.payload
    },
    [updateQuestionStatistics.pending.type]: (state) => {
      state.isLoading = true
    },
    [updateQuestionStatistics.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default questionSlice.reducer
