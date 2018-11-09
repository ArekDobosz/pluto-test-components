import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
    return (
    <div>
        <CircularProgress size={24} thickness={5}/>
    </div>
    );
}

export default Loader;