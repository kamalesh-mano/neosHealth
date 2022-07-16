import { combineReducers } from "redux";
import { taskReducer} from "./taskReducer";
import {currentTaskReducer} from "../reducer/currentReducer"
import {completedTaskReducer} from "../reducer/completedReducer"
const reducers = combineReducers({
    AllTask:taskReducer,
    CurrentTask:currentTaskReducer,
    CompletedTask:completedTaskReducer
});
export default reducers;