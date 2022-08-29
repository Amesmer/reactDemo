import { createStore } from 'redux'

// 导入创建的reducer
import { reducer } from './reducer'

// 构建store
const store = createStore(reducer);

export default store