import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import { IQuestion } from 'utils/interface'

export const questionAPI = createApi({
  reducerPath: 'questionAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
  tagTypes: ['Question'],
  endpoints: (build) => ({
    // fetchQuestionTheme: build.query<IQuestion[], string>({
    //   query: () => ({
    //     url: ROUTES.questionTheme,
    //   }),
    // }),
    // fetchQuestion: build.query<IQuestion[], string>({
    //   query: (theme: string) => ({
    //     url: `${ROUTES.questionTheme}/${theme}`,
    //   }),
    //   // providesTags: (result) => ['Question'],
    //   providesTags: (result, error, arg) =>
    //     result
    //       ? [
    //           ...result.map(({ _id }) => ({ type: 'Question' as const, _id })),
    //           'Question',
    //         ]
    //       : ['Question'],
    // }),
    // updateKnew: build.mutation<
    //   IQuestion[],
    //   {
    //     questionTheme: string
    //     questionId: string
    //   }
    // >({
    //   query: (arg) => {
    //     const { questionTheme, questionId } = arg
    //     console.log(questionTheme, questionId)
    //     return {
    //       url: `${ROUTES.questionTheme}/${questionTheme}/${questionId}`,
    //       method: 'PATCH',
    //       body: { questionId },
    //     }
    //   },
    //   invalidatesTags: (result, error, arg) => [
    //     { type: 'Question', id: arg.questionId },
    //   ],
    // }),
  }),
})
