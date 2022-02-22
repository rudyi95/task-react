import React, { useEffect } from 'react'
import { WordPageCard } from 'components'
import { wordAPI } from 'services/WordService'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { fetchWordFolds } from 'store/reducers/ActionCreators'
import styles from './WordsPages.module.scss'

const WordsPages: React.FC = () => {
  const { word: wordFold, error } = useAppSelector((state) => state.wordReduser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWordFolds())
  }, [dispatch])

  // const { data: wordFold } = wordAPI.useFetchWordFoldsQuery(1)

  return (
    <div>
      <h1 className={styles.title}>Words Pages</h1>
      <p className={styles.text}>Every fold has 10 words</p>
      <div className={styles.cardPosition}>
        {wordFold &&
          wordFold.map((data) => (
            <WordPageCard
              key={data._id}
              pageNumber={data.fold}
              firstWordId={data._id}
            />
          ))}
      </div>
    </div>
  )
}

export default WordsPages
