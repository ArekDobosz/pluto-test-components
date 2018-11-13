import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@material-ui/core';

import Alert from '../alerts/Alert';

const CustomTextField = ({icon, error, ...props}) => {

  return (
    <div>
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
      {error 
      ? <Alert message={"Oops, it looks like you haven’t filled out this question."}/>
      : ""
      }
      
    </div>
  );
};

CustomTextField.propTypes = {
  icon: PropTypes.node,
  props: PropTypes.object
};

export default CustomTextField;