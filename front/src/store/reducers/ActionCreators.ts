import { createAsyncThunk } from '@reduxjs/toolkit'
import { QUESTION_THEME_LINK, WORD_PAGES_LINK } from 'utils/httpLinks'
import { IQuestion, IWord } from 'utils/interface'
import axios from 'axios'

interface UpdateKnewProps {
  questionTheme: string
  questionId: string
  controlNumber: number
}

export const fetchQuestionTheme = createAsyncThunk(
  'question/theme',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<IQuestion[]>(QUESTION_THEME_LINK)

      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)
export const fetchQuestion = createAsyncThunk(
  'question/theme',
  async (theme: string, thunkApi) => {
    try {
      const res = await axios.get<IQuestion[]>(
        `${QUESTION_THEME_LINK}/${theme}`
      )

      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)

export const updateQuestionStatistics = createAsyncThunk(
  'question/update',
  async (arg: UpdateKnewProps, thunkApi) => {
    try {
      const { questionTheme, questionId, controlNumber } = arg
      const res = await axios.patch<IQuestion[]>(
        `${QUESTION_THEME_LINK}/${questionTheme}`,
        {
          questionId,
          controlNumber,
        }
      )

      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)

export const fetchWordFolds = createAsyncThunk(
  'word/folds',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<Omit<IWord[], 'engWord' | 'uaWord'>>(
        WORD_PAGES_LINK
      )

      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)

export const fetchWord = createAsyncThunk(
  'word-pages',
  async (pageNum: number, thunkApi) => {
    try {
      const res = await axios.get<IWord[]>(
        `${WORD_PAGES_LINK}/number=${pageNum}`
      )
      console.log(res.data)
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message)
    }
  }
)
