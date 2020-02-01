import React from "react";
import styled from "styled-components";
import NumberFormat, { NumberFormatValues } from "react-number-format";

interface OwnProps {
  prefix: string;
  onChange: (value: number | undefined) => void;
  value?: number;
}

const StyledInput = styled(NumberFormat)`
  text-align: right;
  border: none;
  background-color: transparent;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

const Input = ({ onChange, value, prefix }: OwnProps) => {

  return (
    <StyledInput
      placeholder="0"
      data-test-id={`input`}
      onValueChange={(values: NumberFormatValues) => {
        onChange(values.floatValue && Math.abs(values.floatValue));
      }}
      prefix={prefix}
      allowNegative={false}
      value={value === undefined ? (null as any) : value} //react-number-format doesn't update if value === undefined
      decimalScale={2}
    />
  );
};

export default Input;
