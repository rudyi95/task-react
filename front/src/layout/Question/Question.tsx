import { AccordionAnswer } from 'components'
import React from 'react'
import styles from './Question.module.scss'

const que = [
  {
    id: 'dsfsd',
    question: 'Що таке LocalStoreg',
    answer: '1111111111111111',
  },
  {
    id: 'hgfg',
    question: 'Що таке React',
    answer: '2222222222222222222222',
  },
  {
    id: 'sdfsd',
    question: 'Що таке метод map',
    answer: '33333333333333333333333',
  },
  {
    id: 'jhgff',
    question: 'Що робить toUpperCase()',
    answer: '44444444444444444444444444',
  },
  {
    id: 'jhgff',
    question: 'Що робить toUpperCase()',
    answer: '5555555555555555555555',
  },
  {
    id: 'jhgff',
    question: 'Що робить toUpperCase()',
    answer: '66666666666666666',
  },
  {
    id: 'jhgff',
    question: 'Що робить toUpperCase()',
    answer: '77777777777777777777',
  },
]

const Question: React.FC = () => {
  let da
  const onClick = (que: any) => {
    const randomIndex = Math.floor(Math.random() * que.length)
    const obj = que[randomIndex]
    console.log(obj)
    return (da = que[randomIndex])
  }
  console.log(da)

  return (
    <>
      <div>
        <p>fgsdfvgdf</p>
        <AccordionAnswer answer="dfvfdvdfvfdv" />
      </div>
      <button onClick={() => onClick(que)} type="submit">
        Next
      </button>
    </>
  )
}

export default Question
