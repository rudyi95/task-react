import React, { useEffect, useState } from 'react'
import { AccordionAnswer } from 'components'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
// import { fetchQuestion } from 'store/reducers/ActionCreators'
import styles from './Question.module.scss'
import { questionAPI } from 'services/QuestionService'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'

// const questionTheme = ['JavaScript', 'React', 'HTML', 'CSS']

const Question: React.FC = () => {
  // const { question, isLoading, error } = useAppSelector(
  //   (state) => state.questionReducer
  // )
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchQuestion())
  // }, [dispatch])

  // const onClick = () => {
  //   return dispatch(fetchQuestion())
  // }
  const navigation = useNavigate()
  const location = useLocation()
  const theme = location.pathname.split('/')[3]

  // useEffect(() => {
  //   const local = `${localStorage.getItem('state')}`

  //   navigation(local)
  // }, [navigation])

  // useEffect(() => {
  //   localStorage.setItem('state', location.pathname)
  // }, [location])

  const {
    data: question,
    isLoading,
    error,
    refetch,
  } = questionAPI.useFetchQuestionQuery(theme)

  return (
    <>
      <div className={styles.titleBlock}>
        <button type="button" onClick={() => navigation(ROUTES.questionTheme)}>
          Back to Theme
        </button>
        <h1 className={styles.title}>Question</h1>
      </div>
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
          question.map((data) => (
            <div key={data._id}>
              <p className={styles.question}>{data.question}</p>
              <AccordionAnswer questionId={data._id} answer={data.answer} />
              <button
                type="submit"
                onClick={() => {
                  refetch()
                  navigation(`${ROUTES.questionTheme}/${theme}/${data._id}`)
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
