import React from 'react'
// type TodoItem = {
//     id: number,
//     text: string,
//     done: boolean
// }
type Props ={
    onAddTodo(text:string):void
}
type State={
    text:string
}
class TodoAdd extends React.Component<Props,State>{
    state:State={
        text:''
    }
    
    onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            text:e.target.value
        })
        
    }
    onKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    //   if(e.keyCode===13) {
    //     this.props.onAddTodo(this.state.text)
    //     this.state.text=''
    //   }
    if(e.code==='Enter'&&!!this.state.text.trim()) {
        this.props.onAddTodo(this.state.text)
        this.setState({
            text:""
        })
      }
    }
    render() {
        return (
         <header className='header'>
         <h1>todos</h1>
         <input type="text" className='new-todo'
         placeholder='what needs to be done'
         autoFocus
         value={this.state.text}
         onChange={this.onChange}
         onKeyDown={this.onKeyDown}/>
         </header>
        )
    }
}

export default TodoAdd