import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
        color: '#000',
        height: 32,
        width: 32,
        minHeight: 32,
        boxShadow: 'none',
        marginRight: 10,
        paddingLeft: 4
    },
};

const AddButton = ({...props}) => {
    return (
        <Button
            color="secondary"
            variant="fab"
            mini aria-label="Add"
            style={styles.root}
            {...props}>
                <AddIcon />
        </Button>
    );
}

AddButton.propTypes = {
    props: PropTypes.object
}

export default withStyles(styles)(AddButton);
