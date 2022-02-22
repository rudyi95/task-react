export interface IQuestion {
  _id: string
  question: string
  answer: string
  theme: string
  howOffen: number
  knew: number
  didntKnow: number
}

export interface IWord {
  _id: string
  engWord: string
  uaWord: string
  fold: number
  know: boolean
}
