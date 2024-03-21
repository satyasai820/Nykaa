import { combineReducers } from "redux";
import Reducer1 from "./reducer1";
import { Reducer2 } from "./reducer2";


const rootReducer = combineReducers({Reducer1,Reducer2})

export default rootReducer;