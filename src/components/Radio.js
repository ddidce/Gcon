import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import '../css/Radio.css'
// import classes from '*.module.css';

const GreenRadio = withStyles({
    root: {
        color:'#f15642',
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
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
                />
                <span>번역회사</span>

                <GreenRadio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
                />
                <span>의뢰인</span>

                <GreenRadio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
                />
                <span>번역가</span>
            </div>
        </div>
    </div>
);
}