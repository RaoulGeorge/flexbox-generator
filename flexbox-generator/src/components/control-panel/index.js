import React from 'react';
import styled from 'styled-components';

import Actions from './../actions';

const ControlPanelWrapper = styled.div``;
const Title = styled.h3``;

const ControlPanel = () => {
  return (
    <ControlPanelWrapper>
      <Title>Parent Flex Properties</Title>
      <Actions />
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
