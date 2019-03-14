import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Action from './../action';
import { ACTIONS } from './../../constants/actions-constants';

const ActionsWrapper = styled.div``;

const Actions = ({ actions, onChange }) => {
  return (
    <ActionsWrapper>
      {actions.map(({ property, options }) => (
        <Action property={property} values={options} onChange={onChange} />
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
