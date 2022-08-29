import { getValue } from '@testing-library/user-event/dist/utils'
import React, { FC, useEffect, useState } from 'react'
import store from '../store'
import { sendAction ,action_mode1} from '../store/action'
const ReduxCom: FC = () => {
   
    const [myvalue,setMyvalue]=useState(store.getState().value)
    useEffect(() => {
        // store.subscribe(() => {
        //     console.log('store subscribe', store.getState());
            
        // })
        
    }, []);

    const handleClick = () => {
        // 利用store发送action
        const action = sendAction()
        store.dispatch(action)
        setMyvalue(store.getState().value)
    }
    const handleClick_1 = () => {
        // 利用store发送action
        const action = action_mode1()
        store.dispatch(action)
        setMyvalue(store.getState().value)
    }
    return (
        <div>
            <button onClick={handleClick}>store发送action</button>
            <br />
            <button onClick={handleClick_1}>store发送action_1</button>

            <div>{myvalue}</div>
        </div>

    )
}
export default ReduxCom