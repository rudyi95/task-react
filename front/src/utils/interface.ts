export interface IQuestion {
  _id: string
  question: string
  answer: string
  theme: string
}

export interface IWord {
  _id: string
  engWord: string
  uaWord: string
  fold: number
  know: boolean
}
