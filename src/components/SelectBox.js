import React from 'react';
import '../css/SelectBox.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        // width: '800px',
        // height: '55px',
        // opacity: '0.5',
        // border: 'solid 1px #7d8184',
        // margin : 0,
        // borderRadius : '4px',
        width: '300px',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
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
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" className="outLine">화폐단위를 선택하세요.</InputLabel>
            <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
            >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
            </Select>
        </FormControl>
        </div>
    );
}
