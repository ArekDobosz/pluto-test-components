import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ArrowRightIcon } from '../../img';
import Loader from '../loaders/Loader';

const CustomButton = ({disabled, loading, children, ...props}) => {
  return (
    <Button
      disabled={disabled}
      color="secondary"
      variant="contained"
      {...props}>
        {children}
        {!loading && <ArrowRightIcon/>}
        {loading && <Loader/>}
    </Button>
  );
}

CustomButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default CustomButton;