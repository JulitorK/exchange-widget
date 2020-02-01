import { combineReducers, Reducer } from "redux";
import rates from "./rates";
import pockets from "./pockets";
import { ReduxState } from "../store";

const rootReducer = combineReducers({ pockets, rates }) as Reducer<ReduxState>;
export default rootReducer;
