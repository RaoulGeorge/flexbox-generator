import React, { useEffect } from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div``;

const Options = ({ options, selectedAction, onChange }) => {
  useEffect(() => {
    console.log('count changed', selectedAction);
  }, [selectedAction]);
  return (
    <OptionsContainer>
      <select onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </OptionsContainer>
  );
};

export default Options;
