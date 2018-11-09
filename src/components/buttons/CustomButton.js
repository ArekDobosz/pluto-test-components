import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRight from '../arrows/ArrowRight';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fonFamily: 'Montserrat',
        fontSize: 16,
        backgroundColor: '#F4F4B8',
        borderRadius: 0,
        color: '#054344',
        height: 56,
        width: 260,
        padding: '0 30px',
        justifyContent: 'space-between'
      },
      disabled: {
        backgroundColor: '#CDDADA',
        color: '#054344 !important',
      }
    },
  },
});

class CustomButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      text: this.props.text,
      disabled: this.props.disabled,
      loading: this.props.loading
    });

    this.onClickHandle = this.onClickHandle.bind(this);
  };

  onClickHandle = (event) => {
    event.preventDefault();

    new Promise(() => {

      this.setState(prevState => ({
        loading: true
      }));

      setInterval(() => {
        this.setState(prevState => ({
          loading: false,
          disabled: true
        }));
      }, 2000);

    });
  }

  render() {
    const {text, disabled, loading} = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Button
          disabled={disabled}
          onClick={this.onClickHandle}>
            {text}
            <ArrowRight loading={loading}/>
        </Button>
      </MuiThemeProvider>
    );
  };
}

export default CustomButton;