import React, { Reducer, useReducer } from 'react'
import { UseQuestionContext } from './context'

type Action = {
  type: string
}

type State = {
  index: number
}

const Questions = () => {
  const { data } = UseQuestionContext()
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    index: 0,
  })
  return <div>{data[0]?.question}</div>
}

export default Questions
