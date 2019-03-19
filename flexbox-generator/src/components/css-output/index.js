import React, { useState } from 'react';
import styled from 'styled-components';

const CSSOutputWrapper = styled.div``;

const Title = styled.h1``;

const CSSOutputContent = styled.div`
  height: 400px;
  width: 400px;
  border: 1px solid white;
  margin: 10px;
`;

const CssOutput = () => {
  return (
    <CSSOutputWrapper>
      <Title>CSS Output</Title>
      <CSSOutputContent />
    </CSSOutputWrapper>
  );
};

export default CssOutput;
