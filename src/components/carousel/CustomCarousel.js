import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
    root: {
        maxWidth: 320,
        height: 290,
        flexGrow: 1,
    },
    carousel: {
        backgroundColor: '#7382ff',
        color: '#fff',
        width: '100%',
        height: 290,
        padding: '24px 16px 19px 18px',
        
    },
    title: {
        marginTop: '16px',
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        opacity: 0.7,
        letterSpacing: 'normal',
        fontSize: 16,
        lineHeight: 1.5
    },
    box: {
        backgroundColor: '#fff',
        width: 286,
        height: 96,
    },
    boxText: {
        color: '#7382ff',
        lineHeight: '96px',
        textAlign: 'center',
    }
});

class CustomCarousel extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

  render() {
    const { classes, theme, steps } = this.props;
    const { activeStep } = this.state;
    const maxSteps = steps.length;

    return (
    <div className={classes.root}>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
        >
            {steps.map((step, index) => (
                <div className={classes.carousel} key={step.id}>
                    <p className={classes.title}>{step.title}</p>
                    <p className={classes.text}>{step.text}</p>
                    <div className={classes.box}>
                        <p className={classes.boxText}>{step.box}</p>
                    </div>
                </div>
            ))}
        </SwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
        />
    </div>
    );
  }
}

CustomCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    steps: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(CustomCarousel);