import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import '../css/Radio.css';

const GreenRadio = withStyles({
    root: {
        color: '#f15642',
        '&$checked': {
            color: '#f15642',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="signUp">
            <div className="radio_form">
                <div className="radioContent">
                    <GreenRadio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        id="r1"
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <label htmlFor="r1">번역회사</label>

                    <GreenRadio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        id="r2"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                    <label htmlFor="r2">의뢰인</label>

                    <GreenRadio
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value="c"
                        id="r3"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                    />
                    <label htmlFor="r3">번역가</label>
                </div>
            </div>
        </div>
    );
}
