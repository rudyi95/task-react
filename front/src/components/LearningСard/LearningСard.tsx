import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './LearningСard.module.scss'

interface LearningСardProps {
  title: string
  link: string
}

const LearningСard: React.FC<LearningСardProps> = ({ title, link }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <Button onClick={() => navigate(`${ROUTES.study}${link}`)}>Start</Button>
    </div>
  )
}

export default LearningСard
