import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './ThemeСard.module.scss'

interface ThemeСardProps {
  themeName: string
  questionId: string
}

const ThemeСard: React.FC<ThemeСardProps> = ({ themeName, questionId }) => {
  const navigation = useNavigate()
  return (
    <button
      onClick={() => navigation(`${ROUTES.questionTheme}/${themeName}`)}
      className={styles.link}
    >
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title className={styles.title}>{themeName}</Card.Title>
          <div className={`${styles.icon} && ${styles[`${themeName}`]}`} />
        </Card.Body>
      </Card>
    </button>
    // <div className={styles.card}>
    //   <button
    //     type="button"
    //     className={styles.buttonField}
    //     onClick={() =>
    //       navigate(`${ROUTES.study}${ROUTES.question}/${themeName}`)
    //     }
    //   >
    //     <h1 className={styles.title}>{themeName}</h1>
    //   </button>
    // </div>
  )
}

export default ThemeСard
