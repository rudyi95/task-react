import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FetchArgs } from '@reduxjs/toolkit/dist/query'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import { IWord } from 'utils/interface'

export const wordAPI = createApi({
  reducerPath: 'wordAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
  endpoints: (build) => ({
    // fetchWordFolds: build.query<Omit<IWord[], 'engWord' | 'uaWord'>, number>({
    //   query: () => ({
    //     url: ROUTES.wordsPages,
    //   }),
    // }),
    // fetchWord: build.query<IWord, number>({
    //   query: (pageNum) => {
    //     return {
    //       url: `${ROUTES.wordsPages}/number=${pageNum}`,
    //       params: { pageNum },
    //     }
    //     // &wordId=${wordId}
    //   },
    // }),
    // knowWord: build.mutation<IWord, { pageNum: number; wordId: string }>({
    //   query: (arg) => {
    //     const { pageNum, wordId } = arg
    //     console.log(pageNum, wordId)
    //     return {
    //       url: `${ROUTES.wordsPages}/number=${pageNum}&wordId=${wordId}`,
    //       method: 'PATCH',
    //       body: { pageNum, wordId },
    //     }
    //   },
    // }),
  }),
})
