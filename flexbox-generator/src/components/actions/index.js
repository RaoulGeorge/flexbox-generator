import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Action from './../action';

const ActionsWrapper = styled.div``;

const Actions = ({ actions }) => {
  return (
    <ActionsWrapper>
      {actions.map(action => (
        <Action action={action} />
      ))}
    </ActionsWrapper>
  );
};

Actions.defaultProps = {
  actions: [],
};

Actions.propTypes = {
  actions: PropTypes.array,
};

export default Actions;
