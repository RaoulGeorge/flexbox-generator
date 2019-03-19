import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Action from './../action';
import { ACTIONS } from './../../constants/actions-constants';

const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Actions = ({ actions, onChange }) => {
  return (
    <ActionsWrapper>
      {actions.map(({ property, options, selected }) => (
        <Action property={property} values={options} onChange={onChange} selected={selected} />
      ))}
    </ActionsWrapper>
  );
};

Actions.defaultProps = {
  actions: ACTIONS,
};

Actions.propTypes = {
  actions: PropTypes.array,
};

export default Actions;
