import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
type QuestoinDoneProp = {
  countWrong: number
  countCorrect: number
}
const QuestionsDone: FC<QuestoinDoneProp> = ({ countWrong, countCorrect }) => {
  const style = {
    mainDiv: `w-[100vw] h-[100vh] flex items-center justify-center`,
    headerDiv: `flex flex-col gap-5`,
    header: `text-white p-5 text-[2rem] `,
  }

  const navigate = useNavigate()
  return (
    <div className={style.mainDiv}>
      <div className={style.headerDiv}>
        <h1 className={`${style.header} bg-green-500`}>
          You Got {countCorrect} Answeres Right
        </h1>
        <h1 className={`${style.header} bg-red-500`}>
          You Got {countWrong} Answeres Wrong
        </h1>
        <button
          className={`${style.header} bg-blue-500 hover:bg-blue-300`}
          onClick={() => navigate('/')}
        >
          Retest Agine
        </button>
      </div>
    </div>
  )
}

export default QuestionsDone
