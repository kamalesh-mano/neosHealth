import {ActionTypes} from "../constant/actionTypes"
const currentInitiatState={
    currentTask:[]
}
export const currentTaskReducer = (state = currentInitiatState,{type ,payload }) =>{
    switch (type){
        case ActionTypes.MOVE_TO_CURRENT:
            return {...state, currentTask:payload}
        
        default:
            return state
    }

}