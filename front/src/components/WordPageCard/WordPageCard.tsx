import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './WordPageCard.module.scss'

interface WordPageCardProps {
  pageNumber: number
  firstWordId: string
}

const WordPageCard: React.FC<WordPageCardProps> = ({
  pageNumber,
  firstWordId,
}) => {
  return (
    <Link
      to={`${ROUTES.wordsPages}/number=${pageNumber}`}
      className={styles.link}
    >
      <Card className={styles.card}>
        <p className={styles.title}>#{pageNumber}</p>
        <div className={styles.foldIcon} />
      </Card>
    </Link>
  )
}

export default WordPageCard
