import React, { useRef } from 'react';
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

const CSSOutput = styled.textarea`
  height: 120px;
  width: 200px;
  background: black;
  color: white;
  font-size: 16px;
  border: none;
`;

const CssOutput = ({ cssProps }) => {
  const stringifyCSS = cssProps => {
    let copiedCSS = '';
    Object.keys(cssProps).forEach(cssProp => {
      copiedCSS += `${cssProp}: ${cssProps[cssProp]};\n`;
    });
    return copiedCSS;
  };
  const domEl = useRef(null);

  const onClicked = () => {
    domEl.current.select();
    document.execCommand('copy');
  };

  return (
    <CSSOutputWrapper>
      <Title>CSS Output</Title>
      <CSSOutputContent>
        <Copy
          onClick={() => {
            onClicked();
          }}
        >
          <FontAwesomeIcon icon="copy" />
        </Copy>
        <CSSOutput ref={domEl} selectable>
          {stringifyCSS(cssProps)}
        </CSSOutput>
      </CSSOutputContent>
    </CSSOutputWrapper>
  );
};

export default CssOutput;
