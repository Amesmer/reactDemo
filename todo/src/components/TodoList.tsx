import React from 'react'
import {TodoItem} from '../type/todos'


// type TodoItem = {
//     id: number,
//     text: string,
//     done: boolean
// }
interface Props {
    list: TodoItem[]
    delItem(id:number):void
    changeStatus(od:number):void
}   
class TodoList extends React.Component<Props>{
    // 传递id到父组件删除
    mydelItem=(e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
        this.props.delItem(id)
    }
    // change事件
    onchange=(e: React.ChangeEvent<HTMLInputElement>,id:number)=>{
        // console.log('e.target.value',e.target.value);
        this.props.changeStatus(id)
    }
    render() {
        return (
                   <ul className='todo-list'>
                {this.props.list.map(item => {
                    return <li key={item.id} className={item.done?"completed":''}>
                        <div className='view'>
                            <input className='toggle' onChange={e=>{this.onchange(e,item.id)} } type="checkbox" />
                            <label>{item.text}</label>
                            <button className='destroy' onClick={(e)=>{this.mydelItem(e,item.id)}}></button>
                        </div>
                        <input className='edit' type="text" />
                    </li>
                })}

            </ul>

         
        )
    }
}

export default TodoList