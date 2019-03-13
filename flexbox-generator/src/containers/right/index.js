import React from 'react';
import styled from 'styled-components';

const RightContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  height: 100%;
`;

const RightContent = styled.div``;

const Right = () => {
  return (
    <RightContainer>
      <RightContent> Right </RightContent>
    </RightContainer>
  );
};

export default Right;
