import { createAsyncThunk } from '@reduxjs/toolkit'
import { QUESTION_THEME_LINK, WORD_PAGES_LINK } from 'utils/httpLinks'
import { IQuestion, IWord } from 'utils/interface'
import axios from 'axios'

interface IUpdateKnewProps {
  questionTheme: string
  questionId: string
  controlNumber: number
}
interface IKnowWordProps {
  wordId: string
  pageNum: number
  controller: number
}

// export const fetchQuestionTheme = createAsyncThunk(
//   'question/getAllTheme',
//   async (_, thunkApi) => {
//     try {
//       const res = await axios.get<IQuestion[]>(QUESTION_THEME_LINK)

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )
// export const fetchQuestion = createAsyncThunk(
//   'question/getCurrentTheme',
//   async (theme: string, thunkApi) => {
//     try {
//       const res = await axios.get<IQuestion[]>(
//         `${QUESTION_THEME_LINK}/${theme}`
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )

// export const updateQuestionStatistics = createAsyncThunk(
//   'question/update',
//   async (arg: IUpdateKnewProps, thunkApi) => {
//     try {
//       const { questionTheme, questionId, controlNumber } = arg
//       const res = await axios.patch<IQuestion[]>(
//         `${QUESTION_THEME_LINK}/${questionTheme}`,
//         {
//           questionId,
//           controlNumber,
//         }
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )

// export const fetchWordFolds = createAsyncThunk(
//   'word/folds',
//   async (_, thunkApi) => {
//     try {
//       const res = await axios.get<Omit<IWord[], 'engWord' | 'uaWord'>>(
//         WORD_PAGES_LINK
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )

// export const fetchWord = createAsyncThunk(
//   'word/page',
//   async (pageNum: number, thunkApi) => {
//     try {
//       const res = await axios.get<IWord[]>(
//         `${WORD_PAGES_LINK}/number=${pageNum}`
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )

// export const knowWord = createAsyncThunk(
//   'word/know',
//   async (arg: IKnowWordProps, thunkApi) => {
//     try {
//       const { pageNum, wordId, controller } = arg

//       const res = await axios.patch<IWord[]>(
//         `${WORD_PAGES_LINK}/number=${pageNum}`,
//         { wordId, controller }
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )
// export const repeatWord = createAsyncThunk(
//   'word/reapet',
//   async (arg: IKnowWordProps, thunkApi) => {
//     try {
//       const { pageNum, wordId, controller } = arg

//       const res = await axios.patch<IWord[]>(
//         `${WORD_PAGES_LINK}/number=${pageNum}`,
//         { wordId, controller }
//       )

//       return res.data
//     } catch (error) {
//       return thunkApi.rejectWithValue((error as Error).message)
//     }
//   }
// )
