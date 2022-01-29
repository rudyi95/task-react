import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import { BASIC_URL } from 'utils/httpLinks'
import styles from './LearningСard.module.scss'

interface LearningСardProps {
  title: string
  link: string
  text: string
}

const LearningСard: React.FC<LearningСardProps> = ({ title, link, text }) => {
  return (
    <Link to={link} className={styles.link}>
      <Card className={styles.card}>
        <Card.Header className={styles.header}>{title}</Card.Header>
        <Card.Body>
          <Card.Text className={styles.text}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
    // <div className={styles.card}>
    //   <button
    //     type="button"
    //     className={styles.buttonField}
    //     onClick={() => navigate(`${ROUTES.study}${link}`)}
    //   >
    //     <h3 className={styles.title}>{title}</h3>
    //   </button>
    // </div>
  )
}

export default LearningСard
