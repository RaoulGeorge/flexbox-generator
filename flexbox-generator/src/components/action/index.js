import React from 'react';
import styled from 'styled-components';

const ActionWrapper = styled.div``;
const PropertyContainer = styled.div``;
const ValueContainer = styled.div``;

const Actions = ({ action }) => {
  return (
    <ActionWrapper>
      <PropertyContainer>align: items</PropertyContainer>
      <ValueContainer />
    </ActionWrapper>
  );
};

export default Actions;
