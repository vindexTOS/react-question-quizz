import React, { useEffect, useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import questions from '../data/data'
type Cell = {
  randomQuestion: () => void
  data: typeof questions
}

const QuestionContext = createContext<Cell | null>(null)

export const QusetionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigate = useNavigate()
  const [data, setData] = useState<typeof questions>([])
  const randomQuestion = () => {
    let shuffledData = questions.sort(() => Math.random() - 0.5)
    setData(shuffledData)
    navigate('/questions')
    console.log(shuffledData)
  }

  return (
    <QuestionContext.Provider value={{ randomQuestion, data }}>
      {children}
    </QuestionContext.Provider>
  )
}

export const UseQuestionContext = () => {
  const context = useContext(QuestionContext)
  if (!context) {
    throw new Error('etc')
  }
  return context
}
