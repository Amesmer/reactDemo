import React, { FC, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 函数组件
type Props = { name: string, age?: number }
const Hello: FC<Props> = ({ name, age }) => {
  const myClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('略略略', e.currentTarget);
  }
  const mychange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {

  }
  return (<div>hi myname:{name},my age{age}
    <button onClick={myClick}></button>
    <input type="text" onChange={(e) => { mychange(e, name) }} />
  </div>
  )
}

// 可省略FC
const Helloagain = ({ name, age }: Props) => {
  useEffect(() => {
    // 异步 在每一轮的渲染结束后执行
    console.log('exec');
    document.title = 'say my name'
    // effect每次都会先执行卸载函数  (effect的返回函数)
    return () => {
      console.log('unmount');
    }
  }, [name, age])
  //useeffect 可于通过设置第二参数来优化性能  当数组中数据变化了 才调用
  // 如果是空数组 则只在初始化执行一次,  有return卸载再执行一次
  const [count, setcount] = useState(0);

  // 使用count值
  function handleClick() {
    setTimeout(() => {
      setcount(count + 1)
    }, 3000);

  }
  // 使用更新的值
  function handClick2() {
    setTimeout(() => {
      setcount(pre =>
        pre + 2
      )
    }, 3000);

  }
  return (<div>hi myname:{name},my age{age}
    <h5>{count}</h5>
    <button onClick={handleClick}>
      +1
    </button>
    <button onClick={handClick2}>
      +2
    </button>
  </div>)
}

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
class C1 extends React.Component<Props, State>{
  // static defaultProps:Partial<Props> = {
  //   age:18
  // }
  render() {
    const { name, age = 22 } = this.props
    return (<div>...:{name},{age}</div>)
  }
}


type Mystate = { count: number }
class C2 extends React.Component<{}, State>{
  state: Mystate = {
    count: 0
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    }
    )
  }

  render() {
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
