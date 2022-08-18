import React,{useState,useRef} from "react";
// ref 的使用
const GetRnd:React.FC=()=>{
  const [rnd,setRnd]=useState(0);
//   创建ref
  const inputRef=useRef<any>()
  const getVal=()=>{
    console.log(inputRef.current.value);
  }
  return(
    <div>
        <input type="text" ref={inputRef} />
        <input type="button"  onClick={getVal} value='获取值'/>
    </div>
  )
}
export default GetRnd