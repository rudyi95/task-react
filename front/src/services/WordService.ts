import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import { IWord } from 'utils/interface'

export const wordAPI = createApi({
  reducerPath: 'wordAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
  endpoints: (build) => ({
    fetchWordFolds: build.query<[], number>({
      query: () => ({
        url: ROUTES.wordsPages,
      }),
    }),
    fetchWord: build.query<IWord[], number>({
      query: (foldNumber) => ({
        url: `${ROUTES.wordsPages}/number=${foldNumber}`,
      }),
    }),
  }),
})
