import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { repeatWord } from 'services/WordService'
import { useAppDispatch } from 'store/hooks/redux'
import { IWord } from 'utils/interface'
import styles from './KnowWordsCard.module.scss'

interface KnowWordsCardProps {
  word: IWord[]
}

const KnowWordsCard: React.FC<KnowWordsCardProps> = ({ word }) => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()

  const filteredWord = word.filter((f) => f.know === true)

  const repeatWordFunc = (
    pageNum: number,
    wordId: string,
    controller: number
  ) => {
    dispatch(repeatWord({ pageNum, wordId, controller }))
  }

  return (
    <div className={styles.mainBlock}>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Open Knew Words {filteredWord.length}/10
      </button>
      <div className={styles.wordsCardBlock}>
        {(isOpen &&
          filteredWord.length > 0 &&
          filteredWord.map((data) => (
            <Card key={data._id} className={styles.card}>
              <Card.Header className={styles.header}>
                {data.engWord} - {data.uaWord}
                <button
                  type="submit"
                  onClick={() => repeatWordFunc(data.fold, data._id, 2)}
                >
                  <div className={styles.close} />
                </button>
              </Card.Header>
            </Card>
          ))) ||
          (isOpen && filteredWord.length === 0 && (
            <p className={styles.study}>Study Harder</p>
          ))}
      </div>
    </div>
  )
}

export default KnowWordsCard
