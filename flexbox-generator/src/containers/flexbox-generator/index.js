import React, { useReducer } from 'react';
import Left from '../left/index';
import Right from '../right/index';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true },
});

const initialState = { cssProps: { 'align-items': 'left', 'align-items1': 'right', 'align-items2': 'mid' } };

const reducer = (state, action) => {
  return { ...state, cssProps: { ...state.cssProps, [action.property]: action.value } };
};

const FlexboxGenerator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const _onChange = (property, value) => {
    dispatch({ property, value });
  };
  return (
    <Container>
      <MuiThemeProvider theme={darkTheme}>
        <Left onChange={_onChange} />
      </MuiThemeProvider>

      <Right {...state} />
    </Container>
  );
};

export default FlexboxGenerator;
