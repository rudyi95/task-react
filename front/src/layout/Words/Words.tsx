import React from 'react'
import { KnowWordsCard, WordCard } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { ROUTES } from 'utils/constants'
import { fetchWord, knowWord } from 'services/WordService'
import styles from './Words.module.scss'

const Words: React.FC = () => {
  const { word, error, isLoading } = useAppSelector(
    (state) => state.wordReduser
  )

  const dispatch = useAppDispatch()
  const navigation = useNavigate()

  const location = useLocation()
  const pageNum = +location.pathname.split('=')[1].split('&')[0]

  const randomWord = () => {
    const filteredWorld = word.filter((f) => f.know === false)
    return filteredWorld[Math.floor(Math.random() * filteredWorld.length)]
  }

  const nextWord = () => {
    dispatch(fetchWord(pageNum))
    randomWord()
  }

  const oneWord = randomWord()

  const knowWordFunc = (controller: number) => {
    dispatch(knowWord({ pageNum, wordId: oneWord._id, controller }))
  }

  return (
    <div>
      <div className={styles.titleBlock}>
        <button
          type="button"
          className={styles.back}
          onClick={() => navigation(ROUTES.wordsPages)}
        >
          Back to Pages
        </button>
        <h1 className={styles.title}>Words</h1>
      </div>
      {error && <h1>{error}</h1>}
      <div className={styles.dataBlock}>
        {(isLoading && (
          <div className={styles['lds-ellipsis']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )) ||
          (oneWord && (
            <>
              <WordCard engWord={oneWord.engWord} uaWord={oneWord.uaWord} />
            </>
          )) ||
          (!oneWord && (
            <div className={styles.message}>
              <p>Congratulations!</p>
              <p>You have learnt 10 word</p>
            </div>
          ))}
      </div>
      {oneWord && (
        <div className={styles.buttonField}>
          <button
            type="button"
            onClick={() => {
              knowWordFunc(1)
              nextWord()
            }}
          >
            I know this word
          </button>
          <button type="button" onClick={nextWord} className={styles.next}>
            next
          </button>
          <br />
        </div>
      )}
      <KnowWordsCard word={word} />
    </div>
  )
}

export default Words
