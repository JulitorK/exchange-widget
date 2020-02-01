import React from "react";
import styled from "styled-components";
import Colours from "../../constants/Colours";
import { getRates, switchCurrencies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../redux/store";

const SwitchIcon = styled.button`
  position: absolute;
  background-color: ${Colours.white};
  border: 2px solid ${Colours.gray100}
  left: 20px;
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 100%;
  bottom: 50%;
  transform: translateY(50%);
  color: ${Colours.blue};
  font-size: 20px;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${Colours.gray100};
  }
`;

const Switch = () => {
  const dispatch = useDispatch();
  const base = useSelector((state: ReduxState) => state.pockets.exchangeFrom);

  const onClick = () => {
    dispatch(switchCurrencies);
    dispatch(getRates(base));
  };
  return (
    <SwitchIcon onClick={onClick} data-test-id="switch">
      &#8645;
    </SwitchIcon>
  );
};

export default Switch;
