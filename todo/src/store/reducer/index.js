// 2.创建reducer函数 处理发送来的action
const initstate = {
    value: 'default'
}
const reducer = (state = initstate, action) => {
    switch (action.type) {
        case 'send_type':
            //组合成一个对象
            return Object.assign({}, state, action)
        case 'action_mode1':
            //组合成一个对象
            return Object.assign({}, state, action)
        default:
            return state
    }
}
module.exports = { reducer }