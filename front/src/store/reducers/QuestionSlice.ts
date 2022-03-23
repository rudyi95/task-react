import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  fetchQuestion,
  fetchQuestionTheme,
  updateQuestionStatistics,
} from 'services/QuestionService'
import { IQuestion } from 'utils/interface'

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
