import React from 'react';
import styled, { css } from 'styled-components';

const createDynamicStyles = cssProps => {
  let styles = '';
  Object.keys(cssProps).forEach(key => {
    styles += `${key}: ${cssProps[key]};
 `;
  });
  return css`
    ${styles}
  `;
};

const RightContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
  width: 100%;
  min-height: 90vh;
  padding: 40px;
`;

const FlexParent = styled.div`
  border: 1px solid red;
  min-height: 90vh;
  display: flex;
  ${props => createDynamicStyles(props.cssProps)}
`;

const FlexChild = styled.div`
  border: 1px solid blue;
  flex: 1;
`;

const Right = ({ cssProps }) => {
  return (
    <RightContainer>
      <FlexParent cssProps={cssProps}>
        <FlexChild>1</FlexChild>
        <FlexChild>2</FlexChild>
        <FlexChild>3</FlexChild>
        <FlexChild>4</FlexChild>
      </FlexParent>
    </RightContainer>
  );
};

export default Right;
