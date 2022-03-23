import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord } from 'utils/interface'
import {
  fetchWordFolds,
  fetchWord,
  knowWord,
  getKnowWord,
} from './ActionCreators'

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
    [fetchWordFolds.fulfilled.type]: (
      state,
      action: PayloadAction<Omit<IWord[], 'engWord' | 'uaWord'>>
    ) => {
      state.isLoading = false
      state.error = ''
      state.word = action.payload
    },
    [fetchWordFolds.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchWordFolds.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
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
    [knowWord.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.isLoading = false
      state.error = ''
      state.word = action.payload
    },
    [knowWord.pending.type]: (state) => {
      state.isLoading = true
    },
    [knowWord.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [getKnowWord.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.isLoading = false
      state.error = ''
      state.word = action.payload
    },
    [getKnowWord.pending.type]: (state) => {
      state.isLoading = true
    },
    [getKnowWord.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default wordSlice.reducer
