import React, { useEffect, useState } from 'react'
import { AccordionAnswer, StatisticsTable } from 'components'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
// import { fetchQuestion } from 'store/reducers/ActionCreators'
import { questionAPI } from 'services/QuestionService'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './Question.module.scss'
import { fetchQuestion } from 'store/reducers/ActionCreators'

const Question: React.FC = () => {
  const { question, isLoading, error } = useAppSelector(
    (state) => state.questionReducer
  )
  const dispatch = useAppDispatch()

  const navigation = useNavigate()
  const location = useLocation()
  const theme = location.pathname.split('/')[3]

  useEffect(() => {
    dispatch(fetchQuestion(theme))
  }, [dispatch])

  const onClick = (questionId: string) => {
    dispatch(fetchQuestion(theme))
    return navigation(`${ROUTES.questionTheme}/${theme}/${questionId}`)
  }
  // useEffect(() => {
  //   const local = `${localStorage.getItem('state')}`

  //   navigation(local)
  // }, [navigation])

  // useEffect(() => {
  //   localStorage.setItem('state', location.pathname)
  // }, [location])

  // const {
  //   data: question,
  //   isLoading,
  //   error,
  //   refetch,
  // } = questionAPI.useFetchQuestionQuery(theme)

  return (
    <>
      {error && <h1>{error}</h1>}
      {(isLoading && (
        <div className={styles['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )) ||
        (question &&
          // <div>
          //   <div className={styles.titleBlock}>
          //     <button
          //       type="button"
          //       className={styles.back}
          //       onClick={() => navigation(ROUTES.questionTheme)}
          //     >
          //       Back to Theme
          //     </button>
          //     <h1 className={styles.title}>Question</h1>
          //     <StatisticsTable
          //       howOffen={que.howOffen}
          //       knew={que.knew}
          //       didntKnow={que.didntKnow}
          //     />
          //   </div>
          //   <p className={styles.question}>{que.question}</p>
          //   <AccordionAnswer
          //     questionId={que._id}
          //     answer={que.answer}
          //     questionTheme={theme}
          //   />
          //   <button
          //     type="submit"
          //     onClick={(e) => {
          //       // refetch()
          //       onClick(que._id)
          //     }}
          //   >
          //     Next Question
          //   </button>
          // </div>
          question.map((data) => (
            <div key={data._id}>
              <div className={styles.titleBlock}>
                <button
                  type="button"
                  className={styles.back}
                  onClick={() => navigation(ROUTES.questionTheme)}
                >
                  Back to Theme
                </button>
                <h1 className={styles.title}>Question</h1>
                <StatisticsTable
                  howOffen={data.howOffen}
                  knew={data.knew}
                  didntKnow={data.didntKnow}
                />
              </div>
              <p className={styles.question}>{data.question}</p>
              <AccordionAnswer
                questionId={data._id}
                answer={data.answer}
                questionTheme={theme}
              />
              <button
                type="submit"
                onClick={(e) => {
                  // refetch()
                  onClick(data._id)
                }}
              >
                Next Question
              </button>
            </div>
          )))}
    </>
  )
}

export default Question
