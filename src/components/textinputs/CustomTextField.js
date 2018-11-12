import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@material-ui/core';

const CustomTextField = ({icon, ...props}) => {

  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {icon ? icon : ""}
          </InputAdornment>
        ),
      }}
    />
  );
};

CustomTextField.propTypes = {
  icon: PropTypes.node,
  props: PropTypes.object
};

export default CustomTextField;