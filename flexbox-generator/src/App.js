import React from 'react';
import FlexboxGenerator from './containers/flexbox-generator/index';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <FlexboxGenerator />
    </AppWrapper>
  );
};

export default App;
