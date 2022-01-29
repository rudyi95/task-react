import { ThemeСard, WordCard, WordPageCard } from 'components'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { wordAPI } from 'services/WordService'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
// import { fetchWord } from 'store/reducers/ActionCreators'
import { ROUTES } from 'utils/constants'
import styles from './WordsPages.module.scss'

const WordsPages: React.FC = () => {
  // const { error } = useAppSelector((state) => state.wordReduser)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchWord())
  // }, [])

  const { data: wordFold } = wordAPI.useFetchWordFoldsQuery(1)

  return (
    <div>
      <h1 className={styles.title}>Words Pages</h1>
      <p className={styles.text}>Every fold has 10 words</p>
      <div className={styles.cardPosition}>
        {wordFold &&
          wordFold.map((data, index) => (
            <WordPageCard key={index} pageNumber={data} />
          ))}
      </div>
    </div>
  )
}

export default WordsPages
