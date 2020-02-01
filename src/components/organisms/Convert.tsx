import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { convert } from "../../redux/actions";
import { ReduxState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translatex(-50%);
`;
const Convert = () => {
  const dispatch = useDispatch();
  const { dict, exchangeAmount, exchangeFrom, exchangeTo } = useSelector(
    (state: ReduxState) => state.pockets
  );
  const balance = dict[exchangeFrom];
  const disabled =
    !exchangeAmount || balance <= exchangeAmount || exchangeFrom === exchangeTo;
  return (
    <StyledButton onClick={() => dispatch(convert)} disabled={disabled}>
      Exchange
    </StyledButton>
  );
};

export default Convert;
