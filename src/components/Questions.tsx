import React, { Reducer, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseQuestionContext } from './context'
import QuestionsDone from './QuestionsDone'
import { motion as m } from 'framer-motion'
type Action = {
  type: string
  payload?: number
}

type State = {
  index: number
  next: boolean
}

const Questions = () => {
  const { data, practiceQuestions, practiceData } = UseQuestionContext()
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'btnNext':
        return { ...state, next: !state.next }
      case 'next':
        return {
          index:
            state.index >= data.length
              ? (state.index = 0)
              : state.index + action.payload!,
          next: !state.next,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    index: 0,
    next: false,
  })
  // hover change
  const [indexBoolean, setIndexBoolean] = React.useState<boolean[]>(
    new Array(data[state.index]?.answers.length).fill(false),
  )
  const [correct, setCorrect] = React.useState<string[]>(
    new Array(data[state.index]?.answers.length).fill(''),
  )
  React.useEffect(() => {
    setCorrect(new Array(data[state.index]?.answers.length).fill(''))
  }, [state.index])
  const onDivHover = (index: number) => {
    let newIndexBoolean = [...indexBoolean]
    newIndexBoolean[index] = true
    setIndexBoolean(newIndexBoolean)
    console.log(newIndexBoolean)
  }

  const onMouseLeftIndex = (index: number) => {
    let newIndexBoolean = [...indexBoolean]
    newIndexBoolean[index] = false
    setIndexBoolean(newIndexBoolean)
  }
  //correct wrong counter
  const [countWrong, setCountWrong] = useState<number>(0)
  const [countCorrect, setCountCorrect] = useState<number>(0)
  // btn disable
  const [btnDisable, setBtnDisable] = React.useState<boolean>(false)
  const [nextPage, setNextPage] = React.useState<boolean>(false)
  const clickHandle = (val: string, index: number) => {
    let newcorrect = [...correct]

    if (val === data[state.index].correct) {
      newcorrect[index] = 'bg-green-400 text-white'

      setCorrect(newcorrect)

      setBtnDisable(!btnDisable)
      setNextPage(!nextPage)
      setCountCorrect(countCorrect + 1)
      dispatch({ type: 'btnNext' })
    } else if (val !== data[state.index].correct) {
      newcorrect[index] = 'bg-red-600 text-white'
      setCorrect(newcorrect)

      setBtnDisable(!btnDisable)
      setNextPage(!nextPage)
      dispatch({ type: 'btnNext' })
      setCountWrong(countWrong + 1)
    }
    console.log(countWrong, countCorrect)
  }
  const style = {
    mainDiv: `w-[100%]   h-[100vh] flex items-center justify-center   `,
    questionDiv: ` w-[60%] border-2 h-[700px]  flex flex-col  items-center justify-center gap-40`,
    header: ` bg-[#3d9d9b] text-white p-2 font-bold rounded-[3px]`,
    answeresDiv: `flex gap-3 flex-col items-center justify-center w-[90%] `,
    btn: `   text-start p-2 relative flex items-center justifty-center   ml-2`,
    btnDiv: `relative flex flex-col items-start justify-start  border-b-[1px]  border-[#3d9d9b]    w-[90%] `,
    line: `h-[100%] bg-blue-400 w-[6px] rounde-[50%] absolute  line `,
  }
  const [shuffledAnsweres, setShuffledAnsweres] = React.useState<string[]>()
  React.useEffect(() => {
    let shuffle = data[state.index]?.answers?.sort(
      (a, b) => Math.random() - 0.5,
    )

    setShuffledAnsweres(shuffle)
    console.log(shuffledAnsweres)
    if (state.index >= 1) {
      setBtnDisable(!btnDisable)
    }
  }, [state.index, data])
  const findPractise = practiceData.find(
    (val: any) => val.question === data[state.index]?.question,
  )
  if (shuffledAnsweres) {
    return (
      <div className={style.mainDiv}>
        {!findPractise && state.next && (
          <button
            onClick={() => {
              practiceQuestions(data[state.index]),
                dispatch({ type: 'next', payload: +1 })
            }}
            className="absolute  bg-red-400 text-white px-10 py-2  rounded-[5px] mb-[40rem]  hover:bg-red-600 "
          >
            Add To Practise Questions
          </button>
        )}{' '}
        {findPractise && (
          <div className="absolute  bg-blue-400 text-white px-10 py-2  mb-[40rem]  hover:bg-red-500 ">
            This Question Is Already In Your Practis List
          </div>
        )}
        <div className={style.questionDiv}>
          <h1 className={style.header}>{data[state.index]?.question}</h1>
          <div className={style.answeresDiv}>
            {shuffledAnsweres?.map((val: string, i: number) => {
              return (
                <div key={i} className={`${style.btnDiv}  ${correct[i]}`}>
                  <div
                    className={`h-[100%] bg-blue-400 w-[6px] rounde-[50%] absolute   ${
                      indexBoolean[i] ? 'linetwo ' : 'line'
                    } `}
                  ></div>
                  <button
                    onMouseOver={() => onDivHover(i)}
                    onMouseLeave={() => onMouseLeftIndex(i)}
                    disabled={btnDisable}
                    onClick={() => {
                      clickHandle(val, i)
                    }}
                    className={style.btn}
                  >
                    {val}
                  </button>
                </div>
              )
            })}
          </div>
          {state.next && (
            <button
              onClick={() => dispatch({ type: 'next', payload: +1 })}
              className="absolute   answereBackGround px-20 py-2 mt-[40rem] hover:linetwo  "
            >
              Next
            </button>
          )}
        </div>
      </div>
    )
  } else {
    return <QuestionsDone countWrong={countWrong} countCorrect={countCorrect} />
  }
}

export default Questions
