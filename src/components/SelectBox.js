import React from 'react';
import '../css/SelectBox.css'
import '../css/font.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const useStyles = makeStyles((theme) => ({

    formControl: {
        width: '100%',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    arrow : {
        "& .MuiSelect-icon" : {
            position: 'absolute',
            fontSize : '50px',
            transform : 'scale(0.7, 1.5)',
            color : 'black',
            top : 0,
            // left : 0
            right : 0,
        }
    }
    }));

//컴포넌트 스타일링
const fSelect = {
    position : 'relative',
    top : '45px'
}


//폰트 스타일링
const fontStyle = {
    color : '#ff0000',
    fontFamily : 'AppleSDFont',
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
        <FormControl variant="outlined" className={classes.formControl} style={fSelect}>
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
            className={classes.arrow}
            >
            
            <option aria-label="None" value="" />
            <option value={10}>₩ 원</option>
            <option value={20}>$ 달러</option>
            <option value={30}>€ 유로</option>
            <option value={40}>¥ 엔화</option>
            </Select>
            <FormHelperText style={fontStyle}>
                {state.age ?"완료되었습니다." : "필수 입력사항입니다."}</FormHelperText>
        </FormControl>
        </div>
    );
}
