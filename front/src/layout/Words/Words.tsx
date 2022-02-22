import { ThemeСard, WordCard } from 'components'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { wordAPI } from 'services/WordService'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { fetchWord } from 'store/reducers/ActionCreators'
// import { fetchWord } from 'store/reducers/ActionCreators'
import { ROUTES } from 'utils/constants'
import { IWord } from 'utils/interface'
import styles from './Words.module.scss'

const Words: React.FC = () => {
  const location = useLocation()
  const navigation = useNavigate()

  const pageNum = +location.pathname.split('=')[1].split('&')[0]
  const wordId = location.pathname.split('=')[2]

  const { word, error } = useAppSelector((state) => state.wordReduser)
  const dispatch = useAppDispatch()
  console.log(word)

  useEffect(() => {
    dispatch(fetchWord(pageNum))
  }, [dispatch])

  // const { data: word, refetch } = wordAPI.useFetchWordQuery(pageNum)

  // const { fold } = word

  // console.log(fold)

  // const [knowWord, { error }] = wordAPI.useKnowWordMutation()

  // useEffect(() => {
  //   navigation(`${location.pathname}/${wordId}`)
  // }, [navigation, location, wordId])

  const knowWordFunc = async () => {
    // await knowWord({ pageNum, wordId })
  }

  // console.log(word)

  const da = () => {
    if (word) {
      // console.log(word._id)

      return (
        <>
          {/* <WordCard engWord={word?.engWord} uaWord={word?.uaWord} />
          <button
            type="button"
            onClick={() => {
              refetch()

              navigation(
                `${ROUTES.wordsPages}/number=${pageNum}&wordId=${word?._id}`
              )
            }}
          >
            next
          </button> */}
        </>
      )
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Words</h1>
      {da()}
      {/* {words &&
        words.map((data) => (
          <>
            <WordCard
              key={data._id}
              engWord={data.engWord}
              uaWord={data.uaWord}
            />
            <button
              type="button"
              onClick={() => {
                navigation(
                  `${ROUTES.wordsPages}/number=${pageNum}&wordId=${data._id}`
                )
                return refetch()
              }}
            >
              next
            </button>
          </>
        ))} */}
      {/* <WordCard engWord={word?.engWord} uaWord={word?.uaWord} />
      <button
        type="button"
        onClick={() => {
          navigation(
            `${ROUTES.wordsPages}/number=${pageNum}&wordId=${word?._id}`
          )
          return refetch()
        }}
      >
        next
      </button> */}

      <br />
      <button type="button" onClick={knowWordFunc}>
        I know this word
      </button>
    </div>
  )
}

export default Words
