import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './AccordionAnswer.module.scss'

interface IAccordionAnswerProps {
  answer: string
  questionId: string
}

const AccordionAnswer: React.FC<IAccordionAnswerProps> = ({
  answer,
  questionId,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // navigate(`${location.pathname}/${questionId}`)
  }, [])

  return (
    <div className={styles.accordionSection}>
      <button
        type="button"
        className={`${styles.accordion} `}
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className={styles.accordionTitle}>Answer</p>
        <div className={`${styles.plusIcon} ${isOpened && styles.minusIcon}`} />
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
