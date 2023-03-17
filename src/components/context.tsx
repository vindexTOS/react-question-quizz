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
    let randomQuestions = []
    for (let i = 0; i < questions.length; i++) {
      let random = Math.floor(Math.random() * questions.length)
      randomQuestions.push(questions[random])
    }
    setData(randomQuestions)
    navigate('/questions')
  }

  useEffect(() => {
    randomQuestion()
  }, [])

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
