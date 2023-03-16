import React from 'react'
import questions from '../data/data'
import { UseQuestionContext } from './context'
import questionMainImg from '../assets/questionMainPhoto.jpg'
const MainPage = () => {
  const { randomQuestion } = UseQuestionContext()
  const style = {
    mainDiv: `flex items-center justify-center w-[100vw] h-[100vh] flex-col gap-10 `,
    img: ` w-[70%] h-[500px] boxshaddow rounded-[5px]`,
    btn: `w-[70%] h-[2.3rem] bg-[#3d9d9b] rounded-[2px] text-white font-bold hover:bg-[#348582]`,
  }
  return (
    <div className={style.mainDiv}>
      <img className={style.img} src={questionMainImg} />
      <p className="text-gray-400 text-[1.2rem] w-[70%] text-center">
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
