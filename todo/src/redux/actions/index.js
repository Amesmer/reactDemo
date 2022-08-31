// 1.构建一个action

let num = 0
let count = 123
const action_1 = () => {
    console.log('action1');
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'action1', value: { num: ++num } }
}

const action_2 = () => {
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'action2', value: count }
}
module.exports = { action_1, action_2 }