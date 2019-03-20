import React from 'react';
import styled from 'styled-components';

const CSSOutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

const CSSOutputContent = styled.div`
  border: 1px solid white;
  margin: 10px;
  text-align: left;
  padding: 20px;
`;

const CssOutput = ({ cssProps }) => {
  return (
    <CSSOutputWrapper>
      <Title>CSS Output</Title>
      <CSSOutputContent>
        {Object.keys(cssProps).map(cssProp => (
          <div>
            {cssProp} : {cssProps[cssProp]}
          </div>
        ))}
      </CSSOutputContent>
    </CSSOutputWrapper>
  );
};

export default CssOutput;
