import React from 'react'
import questions from '../data/data'
import { UseQuestionContext } from './context'
import questionMainImg from '../assets/questionMainPhoto.jpg'
const MainPage = () => {
  const {
    randomQuestion,
    numberOfQuestions,
    setNumberOfQuestions,
    goToPractise,
    practiceData,
  } = UseQuestionContext()
  const style = {
    mainDiv: `flex items-center justify-center w-[100vw]  max_sm:py-10  h-[100%] py-10 flex-col gap-10  overflox-x-hidden `,
    img: ` w-[60%]  max_sm:h-[300px]  h-[600px] max_md:w-[90%] boxshaddow rounded-[5px]`,
    btn: `w-[60%] max_md:w-[90%] h-[2.5rem] bg-[#3d9d9b] rounded-[2px] text-white font-bold hover:bg-[#348582]`,
    inputDiv: `w-[60%] flex flex-col items-center gap-5 `,
    header: `text-[1.2rem] font-bold text-gray-400`,
    numberOfQuestions: `text-[1.2rem] text-green-600 font-bold w-[15rem] gap-2`,
    input: `w-[100%]`,
  }
  return (
    <div className={style.mainDiv}>
      <h1 className="text-gray-400 text-[3rem] w-[60%]  max_md:w-[90%] text-center p-0">
        Front-End Quizz
      </h1>
      <img className={style.img} src={questionMainImg} />
      <p className="text-gray-400 text-[1.2rem] w-[60%]  max_md:w-[90%]   text-center">
        Here, you can prepare for a front-end/React job interview by practicing
        commonly asked questions. I have done extensively researched this
        subject and used multiple sources to gather the information.
      </p>
      <div className={style.inputDiv}>
        {practiceData.length > 0 && (
          <div className="w-[50%]  gap-5 flex items-center justify-center flex-col outline-[1px] outline outline-gray-200 p-2 rounded-[35px] ">
            <h1 className={style.header}>
              You Have{' '}
              <span className="text-red-500 text-[1.2rem]">
                {practiceData.length} Questions
              </span>{' '}
              You Need To Practise
            </h1>
            <button className={style.btn} onClick={goToPractise}>
              Practise Now
            </button>
          </div>
        )}
        <h1 className={style.header}>
          Chose Number Of Questions You Want To Be Asked
        </h1>
        <h1 className={style.header}>
          There Is
          <span className="text-green-400 text-[1.4rem] px-1 s">
            {questions.length}
          </span>
          Questions In Data Base, Each Time Questions Are Randomly Generated
        </h1>
        <input
          onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
          value={numberOfQuestions}
          min={5}
          max={questions.length}
          className={style.input}
          type="range"
        />
        <p className={style.numberOfQuestions}>
          Number Of Questions:
          <span className="text-red-400 w-[4rem] "> {numberOfQuestions} </span>
        </p>
      </div>
      <button className={style.btn} onClick={randomQuestion}>
        Start
      </button>
    </div>
  )
}

export default MainPage
