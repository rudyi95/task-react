import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import { IQuestion } from 'utils/interface'

export const questionAPI = createApi({
  reducerPath: 'questionAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
  endpoints: (build) => ({
    fetchQuestionTheme: build.query<IQuestion[], string>({
      query: () => ({
        url: ROUTES.questionTheme,
      }),
    }),
    fetchQuestion: build.query<IQuestion[], string>({
      query: (theme) => ({
        url: `${ROUTES.questionTheme}/${theme}`,
      }),
    }),
  }),
})
