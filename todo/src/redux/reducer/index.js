/* alt shift a
 接收两个参数
 第一个参数是state
 第二个参数是action
*/

export const reducer = (state, action) => {
    switch (action.type) {
        case "action1":
            state = action.value;
            return state;
        default:
            return state;
    }

}