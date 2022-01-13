import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import styles from './LearningСard.module.scss'

interface LearningСardProps {
  title: string
  link: string
}

const LearningСard: React.FC<LearningСardProps> = ({ title, link }) => {
  const navigate = useNavigate()

  const asyncFunc = async () => {
    const res = await fetch(`${BASIC_URL}${ROUTES.study}${link}`)
    const ques = await res.json()

    return ques
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <Button
        onClick={() => {
          asyncFunc()
          navigate(`${ROUTES.study}${link}`)
        }}
      >
        Start
      </Button>
    </div>
  )
}

export default LearningСard
