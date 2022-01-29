import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from 'utils/interface'
// import { fetchQuestionTheme } from './ActionCreators'

// interface QuestionState {
//   questionTheme: string[]
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
//       action: PayloadAction<string[]>
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
