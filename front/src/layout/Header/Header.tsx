import React from 'react'
import styles from './Header.module.scss'

const Header: React.FC = ({ children }) => {
  return (
    <div className={styles.home}>
      Preparation
      {children}
    </div>
  )
}

export default Header
