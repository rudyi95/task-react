import React, { useEffect } from 'react'
import { AccordionAnswer, StatisticsTable } from 'components'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import { fetchQuestion } from 'services/QuestionService'
import styles from './Question.module.scss'

const Question: React.FC = () => {
  const { question, isLoading, error } = useAppSelector(
    (state) => state.questionReducer
  )
  const dispatch = useAppDispatch()
  const navigation = useNavigate()

  const location = useLocation()
  const theme = location.pathname.split('/')[3]

  const handleClick = () => {
    dispatch(fetchQuestion(theme))
  }

  useEffect(() => {
    navigation(`${ROUTES.questionTheme}/${theme}/${question[0]._id}`)
  }, [theme, question, navigation])

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
              <button type="submit" onClick={handleClick}>
                Next Question
              </button>
            </div>
          )))}
    </>
  )
}

export default React.memo(Question)
