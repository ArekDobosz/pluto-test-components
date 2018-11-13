import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import {RadioBlank, RadioChecked} from '../../img';

const styles = {
    root: {
        height: 32,
        width: 32,
        marginRight: 10,
        marginLeft: 10,
        padding: 0,
        '& svg': {
            fontSize: 32
        }
    }
};

const CustomRadio = ({...props}) => {
    return (
        <Radio
            color="primary"
            {...props} 
            icon={<RadioBlank/>}
            checkedIcon={<RadioChecked/>} />
    );
}

CustomRadio.propTypes = {
    props: PropTypes.object
}

export default withStyles(styles)(CustomRadio);