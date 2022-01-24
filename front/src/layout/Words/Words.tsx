import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { fetchWord } from 'store/reducers/ActionCreators'
import styles from './Words.module.scss'

const Words: React.FC = () => {
  const { word, error } = useAppSelector((state) => state.wordReduser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWord())
  }, [])
  console.log(word)

  return (
    <div>
      <h1>Words</h1>
      {error && <h1>{error}</h1>}
      {word.map((data) => (
        <div key={data._id}>
          <span>{data.engWord}</span> - <span>{data.uaWord}</span>
          <br></br>
        </div>
      ))}
    </div>
  )
}

export default Words
