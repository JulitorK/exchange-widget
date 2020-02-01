import { RatesState } from "./reducers/rates";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { PocketsInterface } from "../interfaces/pockets";

export interface ReduxState {
  pockets: PocketsInterface;
  rates: RatesState;
}

const store = createStore(
  rootReducer, applyMiddleware(thunk)
);

export default store;
