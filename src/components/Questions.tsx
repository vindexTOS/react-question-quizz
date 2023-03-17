import React, { Reducer, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { UseQuestionContext } from './context'
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
  const { data } = UseQuestionContext()
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'btnNext':
        return { ...state, next: !state.next }
      case 'next':
        return {
          index: state.index + action.payload!,
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
  }

  const onMouseLeftIndex = (index: number) => {
    let newIndexBoolean = [...indexBoolean]
    newIndexBoolean[index] = false
    setIndexBoolean(newIndexBoolean)
  }

  const [btnDisable, setBtnDisable] = React.useState<boolean>(false)
  const [nextPage, setNextPage] = React.useState<boolean>(false)
  const clickHandle = (val: string, index: number) => {
    let newcorrect = [...correct]

    if (val === data[state.index].correct) {
      newcorrect[index] = 'bg-green-400 text-white'

      setCorrect(newcorrect)
      setTimeout(() => {
        setBtnDisable(true)
      }, 1000)
      setNextPage(!nextPage)
      dispatch({ type: 'btnNext' })
    } else if (val !== data[state.index].correct) {
      newcorrect[index] = 'bg-red-600 text-white'
      setCorrect(newcorrect)
      setTimeout(() => {
        setBtnDisable(true)
      }, 1000)
      setNextPage(!nextPage)
      dispatch({ type: 'btnNext' })
    }
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

  return (
    <div className={style.mainDiv}>
      <div className={style.questionDiv}>
        <h1 className={style.header}>{data[state.index]?.question}</h1>
        <div className={style.answeresDiv}>
          {data[state.index]?.answers?.map((val: string, i: number) => {
            return (
              <div className={`${style.btnDiv}  ${correct[i]}`}>
                <div
                  className={`h-[100%] bg-blue-400 w-[6px] rounde-[50%] absolute   ${
                    indexBoolean[i] ? 'linetwo ' : 'line'
                  } `}
                ></div>
                <button
                  // disabled={btnDisable}
                  onClick={() => clickHandle(val, i)}
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
}

export default Questions
