import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action_1 } from '../redux/actions';
// import { Connect } from 'react-redux'

// 这个函数要有一个返回值  
// const mapDispatchToProps=(dispatch)=>{
// return {
//     sendAction:()=>{
//         // 利用dispatch 发送一个action
//         // 传递action对象
//         dispatch({
//             type:'action_1'
//         })
//     }
// }
// }
const Coma: FC = () => {
    // 发送action
    const dispatch = useDispatch();
    const btnClick = () => {
        // console.log('coma',props);
        dispatch(action_1())
    }
    return (
        <div>
            <button onClick={btnClick}>+</button>
        </div>

    )
}
export default Coma