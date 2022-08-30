import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Comb: FC = () => {
      // 接收数据
      const myData = useSelector((state) => state )
   useEffect(() => {
    
        console.log(myData);
    }, [myData])

    return (
        <div>

        </div>

    )
}
export default Comb