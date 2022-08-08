import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

// 函数组件
type Props = { name: string, age?: number }
const Hello: FC<Props> = ({ name, age }) => {
  const myClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('略略略', e.currentTarget);
  }
  return (<div>hi myname:{name},my age{age}
    <button onClick={myClick}></button>
    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }} />
  </div>
  )
}

// 可省略FC
const Helloagain = ({ name, age }: Props) => (
  <div>hi myname:{name},my age{age}</div>
)

// class组件  带默认值
type State = { count: number }
// class C1 extends React.Component<Props,State>{
//   static defaultProps:Partial<Props> = {
//     age:18
//   }
//   render(){
//     const {name,age}=this.props
//     return <div>...:{name},{age}</div>
//   }
// }

// 默认值省略写法
class C1 extends React.Component<Props,State>{
  // static defaultProps:Partial<Props> = {
  //   age:18
  // }
  render(){
    const {name,age=22}=this.props
    return (<div>...:{name},{age}</div>)
  }
}


type Mystate={count:number}
class C2 extends React.Component<{},State>{
  state:Mystate={
    count:0
  }
  onIncrement=()=>{
    this.setState({
      count:this.state.count+1
    }
      )
  }

  render(){
   return <div>
    {this.state.count}
    <button onClick={this.onIncrement}>+1</button>
    </div>
  }
}


const App = () => (
  <div >
    <Hello name='zhagnsan' age={17} />
    <Helloagain name='lisi' age={18}></Helloagain>
    <C1 name="we"></C1>
    <C2></C2>
  </div>
)


export default App;
