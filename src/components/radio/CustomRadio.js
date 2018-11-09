import React, { Component } from 'react';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel, Radio } from '@material-ui/core';

class CustomRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}>
                    <FormControlLabel value={'female'} control={<Radio color="primary" onChange={this.props.onChange} />} label={'Female'} />
                    <FormControlLabel value={'male'} control={<Radio color="primary" onChange={this.props.onChange} />} label={'Male'} />
                    {/* <SingleRadio value={'female'} label={'Female'} onChange={this.handleChange} checked={true} />
                    <SingleRadio value={'male'} label={'Male'} onChange={this.handleChange} /> */}
            </RadioGroup>
        );
    }
}

export default CustomRadio;