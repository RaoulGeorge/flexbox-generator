import React from 'react';
import styled from 'styled-components';

import ControlPanel from './../../components/control-panel';
import CssOutput from './../../components/css-output';
const LeftContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
const Left = ({ onChange, cssProps }) => {
  debugger;
  return (
    <LeftContainer>
      <LeftContent>
        <ControlPanel onChange={onChange} />
        <CssOutput cssProps={cssProps} />
      </LeftContent>
    </LeftContainer>
  );
};

export default Left;
