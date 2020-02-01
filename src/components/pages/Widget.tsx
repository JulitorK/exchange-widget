import React, { useEffect } from "react";
import styled from "styled-components";
import CurrencyChip from "../molecules/CurrencyChip";
import Convert from "../organisms/Convert";
import Switch from "../molecules/Switch";
import { getRates } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../redux/store";
import From from "../organisms/From";
import To from "../organisms/To";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Widget = () => {
  const dispatch = useDispatch();
  const base = useSelector((state: ReduxState) => state.pockets.exchangeFrom);
  useEffect(() => {
    dispatch(getRates(base));
    const interval = setInterval(() => dispatch(getRates(base)), 1000000000);
    return () => clearInterval(interval);
  }, [dispatch, base]);
  return (
    <Wrapper>
      <From />
      <Switch />
      <CurrencyChip />
      <To />
      <Convert />
    </Wrapper>
  );
};

export default Widget;
