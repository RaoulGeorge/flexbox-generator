import React, { useState } from 'react';
import styled from 'styled-components';

import Options from './../options';

const ActionWrapper = styled.div``;
const PropertyContainer = styled.div``;

const Action = ({ property, values, onChange }) => {
  const [selectedAction, setSelectedAction] = useState();
  const _onChange = val => {
    onChange(property, val);
  };
  return (
    <ActionWrapper>
      <PropertyContainer>{property}</PropertyContainer>
      <Options
        selectedAction={selectedAction}
        onChange={_onChange}
        setSelectedAction={setSelectedAction}
        options={values}
      />
    </ActionWrapper>
  );
};

export default Action;
