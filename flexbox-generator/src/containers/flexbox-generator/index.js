import React from 'react';
import Left from '../left/index';
import Right from '../right/index';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FlexboxGenerator = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

export default FlexboxGenerator;
