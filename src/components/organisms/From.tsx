import React from "react";
import ExchangeCard from "../molecules/ExchangeCard";
import { ReduxState } from "../../redux/store";
import {
  changeCurrency,
  setAmount,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeType } from "../../constants/Exchange";

const From = () => {
  const dispatch = useDispatch();
  const { exchangeFrom, exchangeAmount } = useSelector(
    (state: ReduxState) => state.pockets
  );
  return (
    <ExchangeCard
      type={ExchangeType.from}
      activeValue={exchangeFrom}
      onDropdownChange={changeCurrency}
      inputValue={exchangeAmount}
      setInputValue={(amount) => dispatch(setAmount(amount))}
      prefix={"-"}
    />
  );
};

export default From;
