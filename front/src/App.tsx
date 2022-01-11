import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from 'layout/Header/Header'
import useRoutes from 'utils/routes'
import styles from './App.module.scss'
import Button from 'components/Button/Button'
import { IButtonStyleTypes } from 'utils/types'

interface IButtonProps {
  id: string
  name: string
  link: string
  style: IButtonStyleTypes
}

const buttons: IButtonProps[] = [
  {
    id: '0',
    name: 'Question',
    link: '/question',
    style: 'mainButtonStyle',
  },
  {
    id: '1',
    name: 'Tasks',
    link: '/tasks',
    style: 'mainButtonStyle',
  },
  {
    id: '3',
    name: 'Home',
    link: '/home',
    style: 'mainButtonStyle',
  },
]

const App: React.FC = () => {
  let navigate = useNavigate()

  const routes = useRoutes()

  const navigation = buttons.map((button) => (
    <Button
      onClick={() => navigate(button.link)}
      buttonStyle="fourthButtonStyle"
      key={button.id}
    >
      <p>{button.name}</p>
    </Button>
  ))

  return (
    <div className={styles.app}>
      <div className={styles.backFon}>
        <Header>{navigation}</Header>
        {routes}
      </div>
    </div>
  )
}

export default App
