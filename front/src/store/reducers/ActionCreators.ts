import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { QUESTION_LINK, WORD_LINK } from 'utils/httpLinks'
import { IQuestion, IWord } from 'utils/interface'

export const fetchQuestion = createAsyncThunk(
  'question/fetchAll',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<IQuestion[]>(QUESTION_LINK)
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)

export const fetchWord = createAsyncThunk(
  'word/fetchAll',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<IWord[]>(WORD_LINK)
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)
