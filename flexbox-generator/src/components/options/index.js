import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const OptionsContainer = styled.div``;

const Options = ({ options, selectedAction, onChange }) => {
  useEffect(() => {
    console.log('count changed', selectedAction);
  }, [selectedAction]);

  const selectOptions = options.map(option => ({ value: option, label: option }));

  const onSelectChange = ({ value }) => {
    onChange(value);
  };

  return (
    <OptionsContainer>
      <Select onChange={onSelectChange} options={selectOptions} />
    </OptionsContainer>
  );
};

export default Options;
