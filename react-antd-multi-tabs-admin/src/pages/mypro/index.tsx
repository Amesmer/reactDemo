import React, { useEffect, FC, useState } from 'react'
import { withRouter } from 'react-router-dom';
import styles from './myPro.module.less'

const MyPropage: FC = () => {
    const [ count, setcount ] = useState<number>(0)
    useEffect(() => {
        console.log('count effect');

    }, [count])
    let btnClick = () => {
        setcount(count=>count+1)
    }
    return (
        <div className={styles.container}>
            <h5>this is mypage</h5>
            <p>{count}</p>
            <button className={styles.mybtn}  onClick={btnClick}>+1</button>

        </div>
    )
}


export default withRouter(MyPropage) 