import React from "react";
import styled from "styled-components";
import Colours from "../../constants/Colours";

interface Props {
  disabled?: boolean;
  children: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  padding: 20px 20px;
  background-color: ${Colours.pink};
  border-radius: 30px;
  min-width: 240px;
  opacity: ${({ disabled }) => (disabled ? ".3" : ".9")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  width: 240px;
  color: ${Colours.white};
  font-size: 14px;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
`;

const Button = ({ disabled, children, ...rest }: Props) => {
  return (
    <StyledButton disabled={disabled} {...rest} data-test-id="button">
      {children}
    </StyledButton>
  );
};

export default Button;
