import React from 'react';
import styled from 'styled-components';

import Actions from './../actions';

const ControlPanelWrapper = styled.div``;
const Title = styled.h3``;

const ControlPanel = ({ onChange }) => {
  return (
    <ControlPanelWrapper>
      <Title>Parent Flex Properties</Title>
      <Actions onChange={onChange} />
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
