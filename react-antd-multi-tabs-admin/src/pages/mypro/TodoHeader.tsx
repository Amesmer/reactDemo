import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '@/store/slicers/todos.slice'
export const TodoHeader:FC=()=>{
    const dispatch= useDispatch()
    const [title,setTitle]=useState('')
    const onKeyDown=(e)=>{
        if(e.code==='Enter'&&!!title.trim()) {
           dispatch(addTodo({title}))
           setTitle('')
          }
        }
    return (
        <header className='header'>
        <h1>todos</h1>
        <input type="text" className='new-todo'
        placeholder='what needs to be done'
        autoFocus
        value={title}
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        onKeyDown={onKeyDown}/>
        </header>
    )
}