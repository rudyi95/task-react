import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './WordPageCard.module.scss'

interface WordPageCardProps {
  pageNumber: number
}

const WordPageCard: React.FC<WordPageCardProps> = ({ pageNumber }) => {
  const navigation = useNavigate()
  return (
    <button
      onClick={() => navigation(`${ROUTES.wordsPages}/number=${pageNumber}`)}
      className={styles.link}
    >
      <Card className={styles.card}>
        <p className={styles.title}>#{pageNumber}</p>
        <div className={styles.foldIcon} />
      </Card>
    </button>
  )
}

export default WordPageCard
