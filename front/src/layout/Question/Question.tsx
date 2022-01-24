import axios from 'axios'
import { AccordionAnswer } from 'components'
import { accessSync } from 'fs'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { fetchQuestion } from 'store/reducers/ActionCreators'
import { questionSlice } from 'store/reducers/QuestionSlice'
import { QUESTION_LINK } from 'utils/httpLinks'
import styles from './Question.module.scss'

const Question: React.FC = () => {
  const { question, isLoading, error } = useAppSelector(
    (state) => state.questionReducer
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchQuestion())
  }, [])
  console.log(question)

  const onClick = () => {
    return dispatch(fetchQuestion())
  }

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {question.map((data) => (
        <div>
          <p>{data.question}</p>
          <AccordionAnswer answer={data.answer} />
        </div>
      ))}
      <button onClick={() => onClick()} type="submit">
        Next
      </button>
    </>
  )
}

export default Question
