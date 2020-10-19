import React from 'react';
import '../css/SelectBox.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // width: '100%',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    arrow : {
        "& .MuiSelect-icon" : {

        }
    },
    // lang : {
    //     position : 'absolute',
    //     bottom : '0',
    // }
    }));

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
        <FormControl  className={classes.formControl}>
            
            {/* <ArrowDropDownIcon 
            className={classes.arrow}  
            /> */}
            <Select
            className={classes.lang}
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
            className={classes.arrow}
            >
            
            {/* <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option> */}
            <option  aria-label="한국어" value="">한국어</option>
            <option value="영어">English</option>
            <option value="일본어">日本</option>
            <option value="중국어">中文</option>
            </Select>
        </FormControl>
        </div>
    );
}
