import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord } from 'utils/interface'
import { fetchWord } from './ActionCreators'

interface WordState {
  word: IWord[]
  isLoading: boolean
  error: string
}

const initialState: WordState = {
  word: [],
  isLoading: false,
  error: '',
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWord.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.isLoading = false
      state.error = ''
      state.word = action.payload
    },
    [fetchWord.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchWord.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default wordSlice.reducer
