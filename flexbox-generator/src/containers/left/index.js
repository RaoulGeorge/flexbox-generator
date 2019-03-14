import React from 'react';
import styled from 'styled-components';

import ControlPanel from './../../components/control-panel';

const LeftContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const LeftContent = styled.div``;
const Left = ({ onChange }) => {
  return (
    <LeftContainer>
      <LeftContent>
        <ControlPanel onChange={onChange} />
      </LeftContent>
    </LeftContainer>
  );
};

export default Left;
