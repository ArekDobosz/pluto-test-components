import React, { Component, Fragment } from 'react';
import { Grid,
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormControl,
  IconButton,
  Tooltip
} 
from '@material-ui/core';

import CustomButton from './components/buttons/CustomButton';
import AddButton from './components/buttons/AddButton';
import CustomRadio from './components/radio/CustomRadio';
import CustomCheckbox from './components/checkbox/CustomCheckbox';
import CustomTextField from './components/textinputs/CustomTextField';
import { Hint, Search } from './img';

import * as theme from './theme';
import './App.css';

const styles = {
  grid: {
    margin: '20px 0'
  }
};

const customTheme = createMuiTheme(theme.theme);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      disabled: false,
      gender: null,
      hobby: []
    };

    this.onClickHandle = this.onClickHandle.bind(this);
    this.genderOnChange = this.genderOnChange.bind(this);
    this.hobbyOnChange = this.hobbyOnChange.bind(this);
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

  genderOnChange = (event) => {
    this.setState({
      gender: event.target.value
    });
  }

  hobbyOnChange = (event) => {
    let newHobby = this.state.hobby.slice(0);
    let index = newHobby.indexOf(event.target.value);

    if (index > -1) {
      newHobby.splice(index, 1);
    } else {
      newHobby = newHobby.concat([event.target.value]);
    }

    this.setState((prevState) => ({
      hobby: newHobby,
    }));
  }

  render() {
    const {loading, disabled, gender} = this.state;

    return (
      <Fragment> 
        <CssBaseline /> 
        <MuiThemeProvider theme={customTheme}>
          <div className="Container">

            <Grid style={styles.grid}>
              <CustomButton
                onClick={this.onClickHandle} 
                disabled={disabled}
                loading={loading}>
                Next 
                </CustomButton>
            </Grid>

            <Grid style={styles.grid}>
              <AddButton />
              Add button
            </Grid>
            
            <Grid style={styles.grid}>
              <FormControl>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.genderOnChange}>

                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<CustomRadio />}
                  checked={gender === 'female'} />

                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<CustomRadio />} 
                  checked={gender === 'male'}/>

              </RadioGroup>
              </FormControl>
            </Grid>
            
            <Grid style={styles.grid}>
              <div>Hobby: </div>
              <FormControlLabel
                control={
                <CustomCheckbox
                  value={'opt1'}
                  onChange={this.hobbyOnChange}
                />}
                label="Hobby1"
              />
              <FormControlLabel
                control={
                <CustomCheckbox
                  value={'opt2'}
                  onChange={this.hobbyOnChange}
                />}
                label="Hobby2"
              />
              <FormControlLabel
                control={
                <CustomCheckbox
                  value={'opt3'}
                  onChange={this.hobbyOnChange}
                />}
                label="Hobby3"
              />
            </Grid>

            <Grid tyle={styles.grid}>
              <CustomTextField
                    placeholder='Display Text'
                  />
              </Grid>

              <Grid style={styles.grid}>
                <CustomTextField
                  placeholder='Search'
                  icon={<Tooltip title="Hint" placement="top"><Hint/></Tooltip>}
                />
              </Grid>
              
              <Grid style={styles.grid}>
                <CustomTextField
                  placeholder='Enter destination'
                  icon={<IconButton><Search/></IconButton>}
                />
              </Grid>
          
          </div>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
