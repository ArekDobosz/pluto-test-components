import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
        backgroundColor: '#F4F4B8',
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
            variant="fab"
            mini aria-label="Add"
            style={styles.root}
            {...props}>
                <AddIcon />
        </Button>
    );
}

export default withStyles(styles)(AddButton);
