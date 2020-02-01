import ActionTypes from "../actionTypes";
import FetchStatus from "../../constants/FetchStatus";
import { getRatesDone, getRatesFailed, getRatesPending } from "../actions";

export interface Rate {
  [k: string]: number;
}

export interface RatesState {
  dict: Rate;
  status?: FetchStatus;
}
type Action =
  | ReturnType<typeof getRatesDone>
  | typeof getRatesPending
  | typeof getRatesFailed;

export const initialState: RatesState = {
  dict: {},
  status: undefined
};

const ratesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.getRatesPending: {
      return { ...state, status: FetchStatus.Pending };
    }
    case ActionTypes.getRatesDone: {
      return { ...state, dict: action.rates };
    }
    case ActionTypes.getRatesFailed: {
      return { ...state, status: FetchStatus.Failed };
    }
    default:
      return state;
  }
};

export default ratesReducer;
