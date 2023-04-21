import React, { FC } from 'react'
import { FilterArrayType } from './Filters'
type PropTpye = {
  data: FilterArrayType[]
  fun: (id: string) => void
}
const FilterMapComponent: FC<PropTpye> = ({ data, fun }) => {
  return (
    <div
      className={`  rounded-[20px] items-center   bg-white w-[10rem]  zindex  z-20 zindex  boxshaddow p-2 gap-5 flex flex-col  `}
    >
      {data.map((val: FilterArrayType) => {
        return (
          <div
            onClick={() => fun(val.id)}
            style={{ color: `${val.color}` }}
            className="font-bold zindex hover:bg-gray-100 w-[100%] cursor-pointer h-[2rem] rounded-[10px] flex items-center justify-center "
            key={val.id}
          >
            {val.title}
          </div>
        )
      })}
    </div>
  )
}

export default FilterMapComponent
