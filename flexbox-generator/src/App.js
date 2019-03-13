import React, { Component } from 'react';
import FlexboxGenerator from './containers/flexbox-generator/index';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <FlexboxGenerator />
      </AppWrapper>
    );
  }
}

export default App;
