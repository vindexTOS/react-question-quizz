import React from 'react'
import questions from '../data/data'
import { UseQuestionContext } from './context'
import questionMainImg from '../assets/questionMainPhoto.jpg'
const MainPage = () => {
  const { randomQuestion } = UseQuestionContext()
  const style = {
    mainDiv: `flex items-center justify-center w-[100vw] max_sm:py-10  h-[100%] flex-col gap-10  overflox-x-hidden `,
    img: ` w-[60%]  max_sm:h-[300px] h-[400px] max_md:w-[90%] boxshaddow rounded-[5px]`,
    btn: `w-[60%] max_md:w-[90%] h-[2.5rem] bg-[#3d9d9b] rounded-[2px] text-white font-bold hover:bg-[#348582]`,
  }
  return (
    <div className={style.mainDiv}>
      <h1 className="text-gray-400 text-[3rem] w-[60%]  max_md:w-[90%] text-center p-0">
        Front-End Quizz
      </h1>
      <img className={style.img} src={questionMainImg} />
      <p className="text-gray-400 text-[1.2rem] w-[60%]  max_md:w-[90%]   text-center">
        Here, you can prepare for a front-end/React job interview by practicing
        commonly asked questions. I have extensively researched this subject and
        used multiple sources to gather the information.
      </p>
      <button className={style.btn} onClick={randomQuestion}>
        Start
      </button>
    </div>
  )
}

export default MainPage
