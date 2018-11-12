import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import {CheckboxChecked, CheckboxBlank} from '../../img';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        height: 32,
        width: 32,
        marginLeft: 10,
        marginRight: 10,
        '& svg': {
            fontSize: 32
        }
    }
};

const CustomCheckbox = ({...props}) => {
    return (
        <Checkbox {...props}
            color="primary"
            checkedIcon={<CheckboxChecked/>}
            icon={<CheckboxBlank/>}
        />
    );
}

CustomCheckbox.propTypes = {
    props: PropTypes.object
}

export default withStyles(styles)(CustomCheckbox);