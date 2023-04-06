import React, { useState } from 'react'
import { UseQuestionContext } from './context'

const Practise = () => {
  const { practiceData, RemovePractiseQuestions } = UseQuestionContext()
  const style = {
    mainDiv: `flex flex-col w-[100vw] h-[100vh] items-center justify-center  `,
    header: `text-[2rem] font-bold text-green-900 text-center max_sm:text-[1.5rem]`,
    questionDiv: `w-[40%] h-[500px] max_Xll:w-[90%] max_sm:text-[12px] overflow-y-scroll flex flex-col items-center gap-2 outline  outline-[1px]   outline-green-900 p-5 rounded-[5px]`,
    innerQuestionDiv: `flex w-[90%] gap-1 cursor-pointer`,
    question: ` w-[100%]  text-center bg-[#3d9d9b] p-2 text-white font-bold   `,
    remove: `bg-red-400 text-white px-5 font-bold hover:bg-red-500`,
    answere: `bg-green-400 text-white font-bold p-5`,
  }

  const [answereBoolean, setAnswereBoolean] = useState<boolean[]>(
    new Array(practiceData.length).fill(false),
  )
  const Answere = (index: number) => {
    let newAnswere = [...answereBoolean]
    newAnswere[index] = !newAnswere[index]
    setAnswereBoolean(newAnswere)
  }
  return (
    <div className={style.mainDiv}>
      <h1 className={style.header}>List Of Questions</h1>
      <h1 className={style.header}>
        Click The Question To See Correct Answere
      </h1>
      <p className="text-[1.1rem] text-center font-bold py-2 text-gray-700">
        Reserch More About This Questions To Get Deeper Understending Of Them
      </p>
      <div className={style.questionDiv}>
        {practiceData.map((val: any, index: number) => {
          return (
            <div
              title="Click To See Correct Answere"
              className={style.innerQuestionDiv}
              key={index}
            >
              <div className={`${style.innerQuestionDiv} flex-col`}>
                <div onClick={() => Answere(index)} className={style.question}>
                  {val.question}
                </div>
                {answereBoolean[index] && (
                  <div className={style.answere}>{val.correct}</div>
                )}
              </div>
              <button
                className={style.remove}
                onClick={() => RemovePractiseQuestions(val.question)}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Practise
