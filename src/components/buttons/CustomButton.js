import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ArrowRightIcon } from '../../img';
import Loader from '../loaders/Loader';

const CustomButton = ({text, disabled, loading, ...props}) => {
  return (
    <Button
      disabled={disabled}
      color="secondary"
      variant="contained"
      {...props}>
        {text}
        {!loading && <ArrowRightIcon/>}
        {loading && <Loader/>}
    </Button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CustomButton;