import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const TODOS_FEATURE_KEY='todos'

// 状态切片
//第一种 异步调用方法 
export const loadTodos = createAsyncThunk(
    `{TODOS_FEATURE_KEY}/loadTodos`,
    (payload: string, { dispatch }) => {
        console.log('loading------');
        
        axios.get(payload).then(response => {
            dispatch(setTodos(response.data))
        })
    })
//第二种异步方法  返回promise
export const secloadTodos:any = createAsyncThunk(
    'todos/loadTodos',
    (payload: string, { dispatch }) => {
        console.log('loading------');
        
        axios.get(payload)
    })


//                      别名
const { actions, reducer: TodosReducer } = createSlice({
    name: TODOS_FEATURE_KEY,
    initialState: [],
    reducers: {
        // 添加任务
        // addTodo(state, action) {
        //     // 此处可直接对状态进行操作
        //     // 因为内部及成龙不可变数据结构 此处不回改变原状态 而是返回新状态
        //     state.push(action.payload)
        // }
        addTodo: {
            reducer(state, action) {
                state.push(action.payload)
            },
            // 载荷预处理
            prepare(payload): any {
                return {
                    payload: {
                        title: payload.title,
                        id: nanoid(),
                        done: false
                    }
                }
            }
        },
        delItem(state, action) {
            console.log(state[0]['id']);
            // filter不行
            // state.filter((item)=>
            //      item.id!=action.payload
            // )
            console.log(action.payload);
            state.splice(state.findIndex((item) => item.id === action.payload), 1)


        },
        changeStatus(state, action) {
            const index = state.findIndex(todo => todo.id === action.payload)
            if (index !== -1) state[index].done = !state[index].done
        },
        setTodos(state, action) {
            action.payload.forEach(item => {
                state.push(item)
            });
        }

    },
     //接收异步方法
    extraReducers:{
        [secloadTodos.pending](){
            console.log('pending');
            
        },
        [secloadTodos.fulfilled](state,action){
            console.log('fulfilled');
            action.payload.data.forEach(item => {
                state.push(item)
            });
        },
        [secloadTodos.rejected](state,action){
            console.log(action.error);
            
        }
    }
})

export const { addTodo, delItem, changeStatus, setTodos } = actions
export default TodosReducer