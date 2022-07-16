import {ActionTypes} from "../constant/actionTypes"
const completedInitiatState={
    completedTask:[]
}
export const completedTaskReducer = (state = completedInitiatState,{type ,payload }) =>{
    switch (type){
        case ActionTypes.MOVE_TO_COMPLETED:
            console.log("////////")
            return {...state, completedTask:payload}
        
        default:
            return state
    }

}