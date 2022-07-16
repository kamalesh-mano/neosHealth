import {ActionTypes} from "../constant/actionTypes";
export const addTask = (task) => {
    return {
        type:ActionTypes.ADD_TASK,
        payload:task
    };
};
export const removeTask = (task) => {
    return {
        type:ActionTypes.REMOVE_TASK,
        payload:task
    };
};
export const moveToCurrent = (task) => {
    return {
        type:ActionTypes.MOVE_TO_CURRENT,
        payload:task
    };
};
export const moveToCompleted = (task) => {
    return {
        type:ActionTypes.MOVE_TO_COMPLETED,
        payload:task
    };
};
