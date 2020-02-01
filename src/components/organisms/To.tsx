import React from "react";
import ExchangeCard from "../molecules/ExchangeCard";
import { ReduxState } from "../../redux/store";
import { changeCurrency, setAmountReversed } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeType } from "../../constants/Exchange";

const To = () => {
  const dispatch = useDispatch();
  const { exchangeTo, exchangedAmount } = useSelector(
    (state: ReduxState) => state.pockets
  );

  return (
    <ExchangeCard
      type={ExchangeType.to}
      activeValue={exchangeTo}
      onDropdownChange={changeCurrency}
      inputValue={exchangedAmount}
      setInputValue={amount => dispatch(setAmountReversed(amount))}
      prefix={"+"}
    />
  );
};

export default To;
