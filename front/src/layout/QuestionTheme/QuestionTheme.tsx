import React, { useEffect } from 'react'
import { ThemeСard } from 'components'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
// import { fetchQuestionTheme } from 'store/reducers/ActionCreators'
import styles from './QuestionTheme.module.scss'
import { questionAPI } from 'services/QuestionService'
import { fetchQuestionTheme } from 'store/reducers/ActionCreators'

// const questionTheme = ['JavaScript', 'React', 'HTML', 'CSS']

const QuestionTheme: React.FC = () => {
  const { question, isLoading, error } = useAppSelector(
    (state) => state.questionReducer
  )
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchQuestionTheme())
  }, [dispatch])

  // const { questionTheme, isLoading, error } = useAppSelector(
  //   (state) => state.questionReducer
  // )
  // const dispatch = useAppDispatch()

  // const {
  //   data: question,
  //   isLoading,
  //   error,
  // } = questionAPI.useFetchQuestionThemeQuery('')

  // useEffect(() => {
  //   dispatch(fetchQuestionTheme())
  // }, [dispatch])

  // const onClick = () => {
  //   return dispatch(fetchQuestionTheme())
  // }

  return (
    <>
      <h1 className={styles.title}>Question Theme</h1>
      {error && <h1>fffffffffffffffffff</h1>}

      {(isLoading && (
        <div className={styles['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )) || (
        <>
          <div className={styles.cardsBlock}>
            <div className={styles.cardPosition}>
              {question &&
                question.map((data) => (
                  <div key={data._id}>
                    <ThemeСard themeName={data.theme} questionId={data._id} />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default QuestionTheme
