import React from 'react'
type TodoItem = {
    id: number,
    text: string,
    done: boolean
}
interface Props {
    list: TodoItem[]
}
class TodoList extends React.Component<Props>{

    render() {
        return (
            <ul className='todo-list'>
                {this.props.list.map(item => {
                    return <li key={item.id}>
                        <div className='view'>
                            <input className='toggle' type="checkbox" />
                            <label>{item.text}</label>
                            <button className='destroy'></button>
                        </div>
                        <input className='edit' type="text" />
                    </li>
                })}

            </ul>
        )
    }
}

export default TodoList