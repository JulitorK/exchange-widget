import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  stroke: rgb(139, 149, 158);
  fill: rgb(139, 149, 158);
  width: 10px;
  transform: rotate(-90deg);
  stroke-width: 1;
`;

export const ArrowUp = () => {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="Icon-chevron"
      >
        <path
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          d="M16 20L8 12 16 4"
          id="Icon-chevron_chevron"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Icon>
  );
};
