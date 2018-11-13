import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: 280,
        height: 80,
        marginTop: 20,
    },
    header: {
        display: 'flex',
        marginBottom: -8,
    },
    leftTop: {
        width: 141,
        height: 15,
        backgroundColor: '#e53e52',
        transform: 'skewY(-5deg)',
        display: 'inline-block',
    },
    rightTop: {
        width: 140,
        height: 15,
        backgroundColor: '#e53e52',
        transform: 'skewY(5deg)',
        display: 'inline-block',
    },
    content: {
        backgroundColor: '#e53e52',
        width: '100%',
        height: 65,
        padding: '15px 20px 10px 20px',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14
    }
};

const Alert = (props) => {
    const {message, classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.leftTop}></div>
                <div className={classes.rightTop}></div>
            </div>
            <div className={classes.content}>{message}</div>
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string.isRequired
}

export default withStyles(styles)(Alert);