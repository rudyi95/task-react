import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questionAPI } from 'services/QuestionService'
import { useAppDispatch } from 'store/hooks/redux'
import { updateQuestionStatistics } from 'store/reducers/ActionCreators'
import styles from './AccordionAnswer.module.scss'

interface IAccordionAnswerProps {
  answer: string
  questionId: string
  questionTheme: string
}

const AccordionAnswer: React.FC<IAccordionAnswerProps> = ({
  answer,
  questionId,
  questionTheme,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // navigate(`${location.pathname}/${questionId}`)
  }, [])

  // const [updateKnew, { error }] = questionAPI.useUpdateKnewMutation()
  const dispatch = useAppDispatch()

  const updateQuestion = async (controlNumber: number) => {
    // await updateKnew({ questionTheme, questionId })
    await dispatch(
      updateQuestionStatistics({ questionTheme, questionId, controlNumber })
    )
  }

  return (
    <div className={styles.accordionSection}>
      <button
        type="button"
        className={`${styles.accordion} `}
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className={styles.accordionTitle}>Answer</p>
        <div className={styles.accordionButtons}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              updateQuestion(1)
            }}
          >
            Knew
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              updateQuestion(2)
            }}
          >
            Didn't know
          </button>
          <div
            className={`${styles.plusIcon} ${isOpened && styles.minusIcon}`}
          />
        </div>
      </button>
      <div
        className={`${styles.accordionAnswer} ${isOpened && styles.opened} `}
      >
        <div className={styles.goTo}>
          <p className={styles.contentAnswer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionAnswer
