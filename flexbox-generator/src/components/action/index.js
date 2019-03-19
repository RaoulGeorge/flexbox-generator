import React, { useState } from 'react';
import styled from 'styled-components';

import Options from './../options';

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  margin: 5px 30px;
`;

const Action = ({ property, values, selected, onChange }) => {
  const [selectedAction, setSelectedAction] = useState();
  const _onChange = val => {
    onChange(property, val);
  };
  return (
    <ActionWrapper>
      <Options
        selectedAction={selectedAction}
        onChange={_onChange}
        setSelectedAction={setSelectedAction}
        options={values}
        property={property}
        selected={selected}
      />
    </ActionWrapper>
  );
};

export default Action;
