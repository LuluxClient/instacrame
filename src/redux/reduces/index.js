import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
    posts: movieReducer,
});

export default rootReducer; 