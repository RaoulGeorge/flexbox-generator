import React from 'react';
import FlexboxGenerator from './containers/flexbox-generator/index';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const App = () => {
  library.add(faCopy);

  return (
    <AppWrapper>
      <FlexboxGenerator />
    </AppWrapper>
  );
};

export default App;
