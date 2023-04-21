import React, { useEffect, useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import questions, { Questions } from '../data/data'

type Cell = {
  randomQuestion: () => void
  data: typeof questions
  setNumberOfQuestions: React.Dispatch<React.SetStateAction<number>>
  numberOfQuestions: number
  practiceQuestions: (obj: Questions) => void
  practiceData: Questions[]
  goToPractise: () => void
  RemovePractiseQuestions: (val: string) => void
  FilterCategory: (id: string) => void
  FilterDifficulty: (id: string) => void
}

const QuestionContext = createContext<Cell | null>(null)

export const QusetionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigate = useNavigate()
  const [questoinData, setQuestionData] = useState<typeof questions>(questions)
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(5)
  const [practiceData, setPracticeData] = useState<typeof questions>([])
  const [data, setData] = useState<typeof questions>([])

  const practiceLocalData = localStorage.getItem('practice')?.toString() || '[]'
  useEffect(() => {
    if (practiceData) {
      setPracticeData(JSON.parse(practiceLocalData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('practice', JSON.stringify(practiceData))
    console.log(practiceData)
  }, [practiceData])
  const practiceQuestions = (obj: Questions) => {
    setPracticeData([...practiceData, obj])
    console.log(practiceData)
  }
  const randomQuestion = () => {
    let shuffledData = questoinData
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfQuestions)
    setData(shuffledData)
    navigate('/questions')
    // console.log(shuffledData)
  }

  const goToPractise = () => {
    let shuffledData = practiceData.sort(() => Math.random() - 0.5)

    setData(shuffledData)
    navigate('/questions')
  }
  const RemovePractiseQuestions = (val: string) => {
    let filter = practiceData.filter((value: any) => {
      if (value.question !== val) {
        return val
      }
    })
    console.log(filter)
    setPracticeData(filter)
  }

  const FilterCategory = (id: string) => {
    let filteredValue = questoinData.filter((val: any) => val.category === id)
    setQuestionData(filteredValue)
    console.log(filteredValue)
  }
  const FilterDifficulty = (id: string) => {}
  return (
    <QuestionContext.Provider
      value={{
        randomQuestion,
        data,
        numberOfQuestions,
        setNumberOfQuestions,
        practiceQuestions,
        practiceData,
        goToPractise,
        RemovePractiseQuestions,
        FilterCategory,
        FilterDifficulty,
      }}
    >
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
