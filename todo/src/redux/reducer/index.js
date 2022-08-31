/* alt shift a
 接收两个参数
 第一个参数是state
 第二个参数是action
*/
// interface ActionType {
//     type: string;
//     value: any;
// }
const initstate = {
    num: 0
}
export const reducer = (state = initstate, action) => {
    switch (action.type) {
        case "action1":
            state = action.value;
            console.log(' action.value', action.value);
            return state;
        default:
            return state;
    }

}