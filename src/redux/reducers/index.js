import {combineReducers} from "redux"
import bookReducer from "./bookReducer"
import filterReducer from "./filterReducer"

const rootReducer = combineReducers(
    {
        filter :filterReducer ,
        book :bookReducer 

    }
)

export default rootReducer