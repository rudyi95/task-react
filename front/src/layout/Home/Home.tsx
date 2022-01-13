import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <h1>Preparation</h1>
      <Button
        variant="outline-secondary"
        onClick={() => navigate(ROUTES.study)}
      >
        Let's Study
      </Button>
    </div>
  )
}

export default Home
