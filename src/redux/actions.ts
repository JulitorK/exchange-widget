import ActionTypes from "./actionTypes";
import { Currencies } from "../constants/Currencies";
import Api from "../api";
import { RatesDTO } from "../interfaces/rates";
import { ExchangeType } from "../constants/Exchange";
import { Option } from "../interfaces/options";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ReduxState } from "./store";

type TDispatch = ThunkDispatch<ReduxState, void, AnyAction>;

export const setCurrency = (
  currency: Currencies,
  exchangeType: ExchangeType
) => ({
  type: ActionTypes.setCurrency as ActionTypes.setCurrency,
  currency,
  exchangeType
});

export const changeCurrency = ({ name, type }: Option) => (
  dispatch: TDispatch
) => {
  dispatch(setCurrency(name, type));
  dispatch(getRates(name));
};

export const getRatesPending = {
  type: ActionTypes.getRatesPending as ActionTypes.getRatesPending
};

export const getRatesDone = ({ rates }: RatesDTO) => ({
  type: ActionTypes.getRatesDone as ActionTypes.getRatesDone,
  rates
});

export const getRatesFailed = {
  type: ActionTypes.getRatesFailed as ActionTypes.getRatesFailed
};

export const getRates = (base: Currencies) => async (dispatch: TDispatch) => {
  dispatch(getRatesPending);
  try {
    const { data } = await Api.getRate(base);
    dispatch(getRatesDone(data));
  } catch (error) {
    dispatch(getRatesFailed);
    throw new Error(error);
  }
};

export const setAmount = (amount: number | undefined) => {
  return (dispatch: TDispatch, getState: () => ReduxState) =>
    dispatch({
      type: ActionTypes.setAmount as ActionTypes.setAmount,
      rates: getState().rates.dict,
      amount
    });
};
export const setAmountReversed = (amount: number | undefined) => {
  return (dispatch: TDispatch, getState: () => ReduxState) =>
    dispatch({
      type: ActionTypes.setAmountReversed as ActionTypes.setAmountReversed,
      rates: getState().rates.dict,
      amount
    });
};

export const convert = {
  type: ActionTypes.convert as ActionTypes.convert
};

export const switchCurrencies = {
  type: ActionTypes.switch as ActionTypes.switch
};
