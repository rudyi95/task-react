import { LearningСard } from 'components'
import React from 'react'
import { Button } from 'react-bootstrap'
import { ROUTES } from 'utils/constants'
import styles from './Study.module.scss'

const Study: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>What do you want to learn?</h1>
      <div className={styles.cardPosition}>
        <LearningСard title="Question" link={ROUTES.question} />
        <LearningСard title="Tasks" link={ROUTES.tasks} />
        <LearningСard title="Words" link={ROUTES.words} />
      </div>
    </div>
  )
}

export default Study
