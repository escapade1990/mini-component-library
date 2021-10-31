/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = (size) =>
  ({
    small: {
      height: "8px",
      padding: "0px",
      radius: "4px",
    },
    medium: {
      height: "12px",
      padding: "0px",
      radius: "4px",
    },
    large: {
      height: "16px",
      padding: "4px",
      radius: "8px",
    },
  }[size]);

const ProgressBar = ({ value, size }) => {
  const style = styles(size);

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--padding": style.padding, "--radius": style.radius }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ "--width": `${value}%`, "--height": style.height }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /** Trim off corners when progress bar is near full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
