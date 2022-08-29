// 1.构建一个action
const sendAction = () => {
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'send_type', value: '发送一个action' }
}
const action_mode1 = () => {
    // 利用返回值返回一个action对象,需要携带type 属性
    return { type: 'action_mode1', value: 'helloworld' }
}
module.exports = { sendAction, action_mode1 }