import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
        backgroundColor: '#F4F4B8',
        color: '#000',
        height: 32,
        width: 32,
        minHeight: 32,
        boxShadow: 'none',
        marginRight: 10
    },
};

const AddButton = () => {
    return (
        <Button
            variant="fab"
            mini aria-label="Add"
            style={styles.root}>
                <AddIcon />
        </Button>
    );
}

export default AddButton;