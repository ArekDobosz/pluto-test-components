import React, { Component } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core/FormControlLabel';

class CustomCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked,
            checkedB: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));
    }

    render() {
        const {checked} = this.state;
        return (
            <FormControlLabel
                control={
                    <Checkbox
                    checked={true}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                    />
                }
                label="Secondary"
            />
            // <FormControlLabel
            //   control={
            //     <Checkbox
            //       checked={checked}
            //       onChange={this.handleChange}
            //       value="checked"
            //       color="primary"
            //     />
            //   }
            //   label="Primary"
            // />
        );
    };
}

export default CustomCheckbox;