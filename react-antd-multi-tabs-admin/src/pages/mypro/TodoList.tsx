import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItem, changeStatus, loadTodos, secloadTodos, TODOS_FEATURE_KEY, selectTodos } from '@/store/slicers/todos.slice'

// interface Props {
//     // list: TodoItem[]
//     delItem(id: number): void
//     changeStatus(od: number): void
// }
export const TodoList = () => {
    // 从redux中获取todos列表
    // const todos = useSelector((state: any) => state[TODOS_FEATURE_KEY].entities)
    const todos = useSelector(selectTodos)

    console.log('-------todos-------', todos);

    const dispatch = useDispatch()
    useEffect(() => {
        // 调用接口获取todo列表
        // 第一种异步方法
        // dispatch(loadTodos('http://localhost:4200/db.json'))
        // 第二种异步方法 extrareducer
        dispatch(secloadTodos('/db.json'))

    }, [dispatch])
    console.log(todos);

    // 传递id到父组件删除
    const mydelItem = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        dispatch(delItem(id))
    }
    // change事件
    const mychange = (e: React.ChangeEvent<HTMLInputElement>, item: any) => {
        // console.log('e.target.value',e.target.value);
        dispatch(changeStatus(item))
    }
    return (<ul className='todo-list'>
        {todos.map((item:any) => (
        // {/* 不用selector状态选择器需要这样写 */}
        // {Object.values(todos).map((item: any) => (
            <li key={item.id} className={item.done ? "completed" : ''}>
                <div className='view'>
                    <input className='toggle' onChange={e => mychange(e, item)} type="checkbox" />
                    <label>{item.title}</label>
                    <button className='destroy' onClick={e => mydelItem(e, item.id)}></button>
                </div>
                <input className='edit' type="text" />
            </li>
        ))}
    </ul>
    )
}

export default TodoList