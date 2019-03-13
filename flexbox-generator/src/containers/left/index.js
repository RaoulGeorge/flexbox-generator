import React from 'react';
import styled from 'styled-components';

const LeftContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  height: 100%;
`;

const LeftContent = styled.div``;
const Left = () => {
  return (
    <LeftContainer>
      <LeftContent> Left </LeftContent>
    </LeftContainer>
  );
};

export default Left;
