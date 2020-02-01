import React from "react";
import styled from "styled-components";
import Colours from "../../constants/Colours";
import Dropdown from "../atoms/Dropdown";
import Input from "../atoms/Input";
import { changeCurrency } from "../../redux/actions";
import { Currencies, Symbols } from "../../constants/Currencies";
import { Option } from "../../interfaces/options";
import { ExchangeType } from "../../constants/Exchange";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/store";

const Grid = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Grid)`
  background-color: ${({ type }: Partial<OwnProps>) =>
    type === "from" ? Colours.white : Colours.gray100};
  position: ${({ type }: Partial<OwnProps>) =>
    type === "from" ? "relative" : "initial"};
  flex-direction: row;
`;

const Balance = styled.div`
  color: ${Colours.gray500};
  font-size: 14px;
  padding-left: 20px;
`;

interface OwnProps {
  type: ExchangeType;
  activeValue: Currencies;
  inputValue?: number | undefined;
  setInputValue: (value: number | undefined) => void;
  onDropdownChange: typeof changeCurrency;
  prefix: string;
}

const ExchangeCard = ({
  type,
  inputValue,
  activeValue,
  setInputValue,
  onDropdownChange,
  prefix
}: OwnProps) => {
  const { dict } = useSelector((state: ReduxState) => state.pockets);
  const options: Option[] = Object.keys(dict).map(pocket => ({
    name: pocket as Currencies,
    balance: dict[pocket as Currencies],
    type: type
  }));
  const value = options.filter(option => option.name === activeValue)[0];
  return (
    <Wrapper type={type}>
      <Grid>
        <div>
          <Dropdown
            options={options}
            value={value}
            onChange={onDropdownChange}
            type={type}
          />
          <Balance data-test-id="balance">
            {`Balance: ${Math.round(value.balance * 100) / 100} `}
            {Symbols[value.name]}
          </Balance>
        </div>
      </Grid>
      <Grid>
        <Input value={inputValue} onChange={setInputValue} prefix={prefix} />
      </Grid>
    </Wrapper>
  );
};

export default ExchangeCard;
