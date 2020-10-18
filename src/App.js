import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SelectBox from './components/SelectBox';
import NativePickers from './components/NativePickers';
import Button from './components/Button'
import Radio from './components/Radio';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        display : 'flex',
        marginRight :'72px',
        marginLeft :'73px',
        },
    },
    }));

    export default function BasicTextFields() {
    const classes = useStyles();


    return (
        <div className="form1">
            <form className={classes.root} noValidate autoComplete="off">
            <Radio />
            <p>기본정보 입력</p>
            <TextField className="outlined-basic" label="이메일(아이디)를 입력하세요." variant="outlined" />
            <TextField className="outlined-basic" label="비밀번호를 입력하세요." variant="outlined" />
            <TextField className="outlined-basic" label="회사명을 입력하세요" variant="outlined" />
            <SelectBox />
            <NativePickers />
            <Button />

        </form>
        </div>
    );
}