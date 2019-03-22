import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  padding: 50px 20px;
  position: relative;
`;

const Copy = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const CssOutput = ({ cssProps }) => {
  return (
    <CSSOutputWrapper>
      <Title>CSS Output</Title>
      <CSSOutputContent>
        <Copy>
          <FontAwesomeIcon icon="copy" />
        </Copy>
        {Object.keys(cssProps).map(cssProp => (
          <div>
            {cssProp} : {cssProps[cssProp]};
          </div>
        ))}
      </CSSOutputContent>
    </CSSOutputWrapper>
  );
};

export default CssOutput;
