import React, { useState, useRef } from "react";
import styled from "styled-components";
import Colours from "../../constants/Colours";
import { useClickAway } from "react-use";
import { ArrowUp } from "../../constants/svg";
import { changeCurrency } from "../../redux/actions";
import { Option as OptionInterface } from "../../interfaces/options";
import { ExchangeType } from "../../constants/Exchange";
import { useDispatch } from "react-redux";

interface OwnProps {
  value: OptionInterface;
  onChange: typeof changeCurrency;
  options: OptionInterface[];
  type: ExchangeType;
}

interface OptionProps {
  open: boolean;
}
const DropdownWrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  position: relative;
`;

const Options = styled.div`
  position: absolute;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0.25rem,
    rgba(0, 0, 0, 0.14) 0px 0.5rem 0.75rem;
  opacity: ${({ open }: OptionProps) => (open ? "1" : 0)};
  visibility: ${({ open }: OptionProps) => (open ? "visible" : "hidden")};
  transition: all 0.2s;
`;

const Option = styled.div`
  padding: 10px 20px;
  color: black;
  background-color: ${Colours.white};
  &:hover {
    background-color: ${Colours.gray100};
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Dropdown = ({ value, onChange, options, type }: OwnProps) => {
  const [open, setOpened] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const onClick = (option: OptionInterface) => {
    dispatch(onChange(option));
    setOpened(false);
  };
  useClickAway(ref, () => {
    setOpened(false);
  });

  return (
    <DropdownWrapper>
      <Select onClick={() => setOpened(true)} data-test-id="dropdown">
        {value ? value.name : ""}
        <ArrowWrapper>
          <ArrowUp />
        </ArrowWrapper>
      </Select>
      <Options open={open} ref={ref}>
        {options.map((option: OptionInterface) => (
          <Option
            key={option.name}
            onClick={() => onClick(option)}
            data-test-id="option"
          >
            {option.name}
          </Option>
        ))}
      </Options>
    </DropdownWrapper>
  );
};

export default Dropdown;
