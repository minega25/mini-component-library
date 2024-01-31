/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
import { spreadStyles } from '../utils';

const STYLES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px',
    '--padding': '0',
    '--width': '370px',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
    '--padding': '0',
    '--width': '370px',
  },
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    '--padding': '4px',
    '--width': '370px',
  },
};

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 8px;

  ${(props) =>
    css`
      ${props.variables}
    `}
  height: var(--height);
  width: var(--width);
  border-radius: 4px 0 0 4px;
  width: ${(props) => props.value}%;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  ${(props) =>
    css`
      ${props.variables}
    `}

  padding: var(--padding);
  border-radius: var(--border-radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  const variables = spreadStyles(styles);

  return (
    <Wrapper variables={variables}>
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
