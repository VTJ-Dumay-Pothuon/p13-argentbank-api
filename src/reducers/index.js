import { combineReducers } from "redux"
import loginReducer from "./login.reducer"
import profileReducer from "./profile.reducer"

export default combineReducers({
    login: loginReducer,
    profile: profileReducer,
});
