import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';

const OptionsContainer = styled.div`
  flex: 0 0 100%;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
  inputLabel: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const Options = ({ options, property, selected, onChange, classes }) => {
  const [val, setVal] = useState(selected);
  const onSelectChange = e => {
    const { value } = e.target;
    setVal(value);
    onChange(value);
  };

  return (
    <OptionsContainer>
      <FormControl className={classes.formControl}>
        <InputLabel>{property}</InputLabel>
        <Select onChange={onSelectChange} value={val}>
          {options.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </OptionsContainer>
  );
};

export default withStyles(styles)(Options);
