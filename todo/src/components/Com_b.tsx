import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
interface stateType {
        num:number
}
const Comb: FC = () => {
      // useSelector 接收数据
      const myData:any= useSelector((state:stateType) => state.num )
      console.log(myData);

   useEffect(() => {
    
    }, [])

    return (
        <div>
            {myData}
        </div>

    )
}
export default Comb