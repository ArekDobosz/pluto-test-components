import React, { Component } from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';

class SingleRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked,
            value: this.props.value,
            label: this.props.label
        }
    }

    render() {
        console.log(this.state, this.props);
        const { value, label, checked } = this.state;
        return (
            <FormControlLabel value={value} control={<Radio color="primary" checked={checked} onChange={this.props.onChange} />} label={label} />
        );
    }
    
}

export default SingleRadio;