import ActionTypes from "../actionTypes";
import {
  convert,
  switchCurrencies,
  setCurrency,
  setAmount,
  setAmountReversed
} from "../actions";
import { Currencies } from "../../constants/Currencies";
import { PocketsInterface } from "../../interfaces/pockets";
import { ExchangeType } from "../../constants/Exchange";

export const initialState: PocketsInterface = {
  dict: {
    [Currencies.EUR]: 100,
    [Currencies.GBP]: 0,
    [Currencies.USD]: 0
  },
  exchangeFrom: Currencies.EUR,
  exchangeTo: Currencies.GBP
};

type PocketActions =
  | ReturnType<
      | typeof setCurrency
      | ReturnType<typeof setAmount>
      | ReturnType<typeof setAmountReversed>
    >
  | typeof switchCurrencies
  | typeof convert;

const pocketsReducer = (
  state = initialState,
  action: PocketActions
): PocketsInterface => {
  switch (action.type) {
    case ActionTypes.setCurrency: {
      if (action.exchangeType === ExchangeType.from) {
        return {
          ...state,
          exchangeFrom: action.currency,
          exchangedAmount: undefined,
          exchangeAmount: undefined,
        };
      } else {
        return {
          ...state,
          exchangeTo: action.currency,
          exchangedAmount: undefined,
          exchangeAmount: undefined,
        };
      }
    }
    case ActionTypes.convert: {
      if (!state.exchangeAmount || !state.exchangedAmount) {
        return { ...state };
      }
      return {
        ...state,
        dict: {
          ...state.dict,
          [state.exchangeFrom]:
            state.dict[state.exchangeFrom] - state.exchangeAmount,
          [state.exchangeTo]:
            state.dict[state.exchangeTo] + state.exchangedAmount
        },
        exchangeAmount: undefined,
        exchangedAmount: undefined
      };
    }
    case ActionTypes.switch: {
      const from = state.exchangeFrom;
      const to = state.exchangeTo;
      return {
        ...state,
        exchangeTo: from,
        exchangeFrom: to,
        exchangeAmount: undefined,
        exchangedAmount: undefined
      };
    }
    case ActionTypes.setAmount: {
      return {
        ...state,
        exchangeAmount: action.amount,
        exchangedAmount: action.amount
          ? action.amount * action.rates[state.exchangeTo]
          : undefined
      };
    }
    case ActionTypes.setAmountReversed: {
      return {
        ...state,
        exchangedAmount: action.amount,
        exchangeAmount: action.amount
          ? action.amount / action.rates[state.exchangeTo]
          : undefined
      };
    }
    default:
      return state;
  }
};

export default pocketsReducer;
