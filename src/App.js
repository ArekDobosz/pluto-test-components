import React, { Component, Fragment } from 'react';
import { Grid, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CustomButton from './components/buttons/CustomButton';
import AddButton from './components/buttons/AddButton';
import CustomRadio from './components/radio/CustomRadio';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as theme from './theme';
import './App.css';

const styles = {
  grid: {
    margin: '10px 0'
  }
};

const customTheme = createMuiTheme(theme.theme);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      disabled: false
    };

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle = (event, props) => {
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
    const {loading, disabled} = this.state;

    return (
      <Fragment> 
        <CssBaseline /> 
        <MuiThemeProvider theme={customTheme}>
          <div className="Container">
            <Grid style={styles.grid}>
              <CustomButton 
                text={'Next'} 
                onClick={this.onClickHandle} 
                disabled={disabled}
                loading={loading}/>
            </Grid>
            <Grid style={styles.grid}>
              <AddButton />
              Add button
            </Grid>
            <Grid style={styles.grid}>
              <CustomRadio />
            </Grid>
          </div>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
