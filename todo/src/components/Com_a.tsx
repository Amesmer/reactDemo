import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action_1 } from '../redux/actions';
// import { Connect } from 'react-redux'


const Coma: FC = () => {
    //useDispatch  hook 发送action
    const dispatch = useDispatch();
    const btnClick = () => {
        // console.log('coma',props);
        dispatch(action_1())
        console.log("add ");
        
    }
    return (
        <div>
            <button onClick={btnClick}>+</button>
        </div>

    )
}
export default Coma