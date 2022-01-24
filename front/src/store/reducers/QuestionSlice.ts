import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from 'utils/interface'
import { fetchQuestion } from './ActionCreators'

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
  },
})

export default questionSlice.reducer
