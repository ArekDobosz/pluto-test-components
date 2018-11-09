import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CustomButton from './components/buttons/CustomButton';
import AddButton from './components/buttons/AddButton';
// import CustomCheckbox from './components/checkbox/CustomCheckbox';
import CustomRadio from './components/radio/CustomRadio';
import './App.css';

const styles = {
  grid: {
    margin: '10px 0'
  }
};

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Grid style={styles.grid}>
          <CustomButton text={'Next'} />
        </Grid>
        <Grid style={styles.grid}>
          <AddButton />
          Add button
        </Grid>
        <Grid style={styles.grid}>
          {/* <CustomCheckbox /> */}
        </Grid>
        <Grid style={styles.grid}>
          <CustomRadio />
        </Grid>
      </div>
    );
  }
}

export default App;
