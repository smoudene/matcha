import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import infosReducer from "./infosReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import userReducer from './userReducer';
import resetPasswordReducer from "./resetPReducer";


const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "infos" : infosReducer,
    "login": loginReducer,
    "user" : userReducer,
    "resetPassword": resetPasswordReducer,
    form
});
export default combinedReducer;