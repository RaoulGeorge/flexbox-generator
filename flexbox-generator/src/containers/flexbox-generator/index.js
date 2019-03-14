import React, { useReducer } from 'react';
import Left from '../left/index';
import Right from '../right/index';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const initialState = { 'align-items': 'left', 'align-items1': 'right', 'align-items2': 'mid' };

const reducer = (state, action) => {
  return { ...state, [action.property]: action.value };
};

const FlexboxGenerator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const _onChange = (property, value) => {
    dispatch({ property, value });
  };
  return (
    <Container>
      <Left onChange={_onChange} />
      <Right {...state} />
    </Container>
  );
};

export default FlexboxGenerator;
