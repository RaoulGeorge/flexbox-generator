import React from 'react';
import styled from 'styled-components';

import ControlPanel from './../../components/control-panel';

const LeftContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  min-height: 100vh;
  background-color: black;
`;

const LeftContent = styled.div``;
const Left = () => {
  return (
    <LeftContainer>
      <LeftContent>
        <ControlPanel />
      </LeftContent>
    </LeftContainer>
  );
};

export default Left;
