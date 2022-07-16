import {ActionTypes} from "../constant/actionTypes"
const initialState= {
    task:[]
}

export const taskReducer = (state = initialState,{type ,payload }) =>{
    switch (type){
        case ActionTypes.ADD_TASK:
            return {...state, task:payload}
        case ActionTypes.REMOVE_TASK:
            return {...state, task:payload}
        default:
            return state
    }

}
