import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
// 导入todoitem类型
import { TodoItem } from './type/todos'
import TodoAdd from './components/TodoAdd'
import Home from './components/Home'
import Coma from './components/Com_a'
import Comb from './components/Com_b'

// type TodoItem = {
//   id: number,
//   text: string,
//   done: boolean
// }
type Todos = {
  todos: TodoItem[]
}

const todos: TodoItem[] = [{
  id: 1,
  text: '吃饭',
  done: true
},
{
  id: 2,
  text: '休息',
  done: false
}]

// 第一个类型变量属性    第二个是状态
class App extends Component<{}, Todos>{
  state: Todos = { todos }
  changeStatus = (id: number) => {
    // let newtodos=[...this.state.todos]
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id == id) {
          item.done = !item.done
        }
        return item
      })
    })
    console.log('this.state.todos',this.state.todos);
  }
  delItem = (id: number) => {
    // this.state.todos.splice(id-1,1)
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.id != id
      })
    })
  }
  onAddTodo = (text: string) => {
    console.log('234234');
    this.setState({
      //  todos:this.state.todos.push({ id: this.state.todos.length + 1, 
      //     text: text, 
      //     done: false })
      todos: [...this.state.todos, {
        id: this.state.todos.length + 1,
        text: text,
        done: false
      }]

    })
  }
  render() {

    return (
      <div>
         <section className='todoapp'>
        {/* 添加任务 */}
        <TodoAdd onAddTodo={this.onAddTodo} />
        <TodoList list={this.state.todos} delItem={this.delItem} changeStatus={this.changeStatus} />
      </section>
       <Home></Home>
       <Coma></Coma>
       <Comb></Comb>
      </div>
     
    )
  }
}



export default App;
