import React from "react";
import styled from "styled-components";
import Colours from "../../constants/Colours";
import { ReduxState } from "../../redux/store";
import { Symbols } from "../../constants/Currencies";
import { useSelector } from "react-redux";

const StyledChip = styled.div`
  position: absolute;
  background-color: ${Colours.white};
  border: 2px solid ${Colours.gray100}
  display: block;
  border-radius: 40px;
  bottom: 50%;
  color: ${Colours.blue};
  font-size: 20px;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, 50%);
`;

const CurrencyChip = () => {
  const { exchangeFrom, exchangeTo } = useSelector(
    (state: ReduxState) => state.pockets
  );
  const currentRate = useSelector((state: ReduxState) => state.rates.dict[exchangeTo]);
  return currentRate ? (
    <StyledChip>
      {Symbols[exchangeFrom]}
      {`1 = `} {Symbols[exchangeTo]}
      {currentRate.toFixed(4)}
    </StyledChip>
  ) : null;
};

export default CurrencyChip;
