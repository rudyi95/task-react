import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { IWord } from 'utils/interface'
import styles from './KnowWordsCard.module.scss'

interface KnowWordsCardProps {
  word: IWord[]
}

const KnowWordsCard: React.FC<KnowWordsCardProps> = ({ word }) => {
  const [isOpen, setIsOpen] = useState(false)

  const filteredWord = word.filter((f) => f.know === true)
  console.log(filteredWord.length)

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
