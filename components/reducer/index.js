//Import
import {combineReducers} from "redux";
import persistReducer from "./persistReducer";
import otherReducer from "./otherReducer";



//Reducer


const rootReducer = combineReducers({
    persisted: persistReducer,
    other: otherReducer,
});

//Reducer Functions
//Export Action Creators


export default rootReducer;
//Export Reducers