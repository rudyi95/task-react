import { ThemeСard, WordCard } from 'components'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { wordAPI } from 'services/WordService'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
// import { fetchWord } from 'store/reducers/ActionCreators'
import { ROUTES } from 'utils/constants'
import styles from './Words.module.scss'

const Words: React.FC = () => {
  const location = useLocation()
  const navigation = useNavigate()

  const [isUrl, setIsUrl] = useState('')

  const pageNum = +location.pathname.split('=')[1]
  console.log(location.pathname)

  const { data: words, refetch } = wordAPI.useFetchWordQuery(pageNum)

  useEffect(() => {
    navigation(`${location.pathname}/${isUrl}`)
  }, [navigation, location, isUrl])

  return (
    <div>
      <h1 className={styles.title}>Words</h1>
      {words &&
        words.map((data) => (
          <WordCard engWord={data.engWord} uaWord={data.uaWord} />
        ))}
      <button type="button" onClick={refetch}>
        next
      </button>

      <button type="button" onClick={refetch}>
        I know this word
      </button>
    </div>
  )
}

export default Words
