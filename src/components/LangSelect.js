import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../css/font.css';

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    lang : {
        background : 'none',
    },
    arrow : {
        fontSize : '12px',
        left : '15px',

        "& .MuiSelect-icon" : {
            position: 'absolute',
            left : '35px',
            color : 'black',
            top : '0px',
        }
    },
    }));

    const fontStyle = {
        fontFamily : 'NotoSans',
        fontWeight : '600'
    }

    export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    

    return (
        <div>
        <FormControl  className={classes.formControl} style = {fontStyle}>
            <Select
            disableUnderline={true}
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
            className={classes.arrow}
            style = {fontStyle}
            >
            <option  aria-label="한국어" value="한국어">한국어</option>
            <option value="영어">English</option>
            <option value="일본어">日本</option>
            <option value="중국어">中文</option>
            </Select>
        </FormControl>
        </div>
    );
}
