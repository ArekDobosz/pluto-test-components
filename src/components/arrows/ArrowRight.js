import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ArrowRight.css';

const ArrowRight = ({loading}) => {
    if (loading) {
        return <CircularProgress size={24} thickness={5} />
    } else {
        return <span className='Arrow-Right'></span>
    }
}

export default ArrowRight;