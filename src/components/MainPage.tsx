import React from 'react'
import questions from '../data/data'
import { UseQuestionContext } from './context'

const MainPage = () => {
  const { randomQuestion } = UseQuestionContext()

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] ">
      <button
        className="w-[9rem] h-[3rem] bg-blue-400 rounded-[30px] text-white font-bold hover:bg-blue-500"
        onClick={randomQuestion}
      >
        Start
      </button>
    </div>
  )
}

export default MainPage
