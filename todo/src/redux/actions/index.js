// 1.构建一个action
let num = 0
const action_1 = () => {
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'action1', value: num++ }
}
const action_2 = () => {
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'action2', value: '2222' }
}
module.exports = { action_1, action_2 }