import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';

const SingleRadio = ({value, label}) => {
    return (
        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
    );
}

export default SingleRadio;