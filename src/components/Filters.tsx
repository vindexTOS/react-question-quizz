import React, { FC } from 'react'
import FilterMapComponent from './FilterMapComponent'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { UseQuestionContext } from './context'
export type FilterArrayType = {
  title: string
  id: string
  color: string
}
const Filters = () => {
  const { FilterCategory, FilterDifficulty } = UseQuestionContext()
  const style = {
    mainSection: `w-[40%] max_lg:w-[90%]  max_sm:w-[100%]  h-[70px] flex items-center justify-center`,
    mainDiv: `w-[100%] rounded-[30px] h-[50px] gap-5  flex justify-around  `,

    dropDownDiv: `  zindex flex items-center flex-col w-[50%] h-[100%]    `,
    btn: `border-2 max_sm:text-[12px] max_sm:w-[10rem] max_sm:gap-5 mt-[2px] p-2 w-[100%] rounded-[30px] flex items-center justify-center gap-10 font-bold text-[1.2rem] text-gray-500`,
  }

  const filterArraysCategory: FilterArrayType[] = [
    { title: 'ALL', id: 'all', color: '#90EE90' },
    { title: 'JavaScript', id: 'js', color: '#998a05' },
    { title: 'React', id: 'react', color: '#61dbfb' },
    { title: 'HTML/CSS', id: 'html', color: '#FFA500' },
  ]
  const filterArrayDifficulty: FilterArrayType[] = [
    { title: 'ALL', id: 'all', color: '#90EE90' },
    { title: 'Easy', id: 'easy', color: '#90EE90' },
    { title: 'Medium', id: 'medium', color: '#FFA500' },
    { title: 'Hard', id: 'hard', color: '#FF0000' },
  ]
  const [dropDownCategory, setDropDownCategory] = React.useState<boolean>(false)
  const [dropDownDifficulty, setDropDownDifficulty] = React.useState<boolean>(
    false,
  )
  const dropDownRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropDownDifficulty(false)
        setDropDownCategory(false)
      }
    }
    document.addEventListener('mousedown', handleOutclick)
    return () => {
      document.removeEventListener('mousedown', handleOutclick)
    }
  }, [dropDownRef])
  type FilterDivProPype = {
    data: FilterArrayType[]
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
    boolean: boolean
    title: string
    fun: (id: string) => void
  }

  const FilterDiv: FC<FilterDivProPype> = ({
    data,
    stateSetter,
    boolean,
    title,
    fun,
  }) => {
    return (
      <div className={style.dropDownDiv}>
        <button onClick={() => stateSetter(!boolean)} className={style.btn}>
          {title} {boolean ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </button>
        {boolean && (
          <div ref={dropDownRef} className="bg-white zindex rounded-[30px] ">
            <FilterMapComponent data={data} fun={fun} />
          </div>
        )}
      </div>
    )
  }

  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <FilterDiv
          fun={FilterCategory}
          data={filterArraysCategory}
          stateSetter={setDropDownCategory}
          boolean={dropDownCategory}
          title={`Category`}
        />
        <FilterDiv
          fun={FilterDifficulty}
          data={filterArrayDifficulty}
          stateSetter={setDropDownDifficulty}
          boolean={dropDownDifficulty}
          title={`Difficulty`}
        />
      </div>
    </section>
  )
}

export default Filters
