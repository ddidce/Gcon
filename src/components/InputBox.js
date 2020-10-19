import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SelectBox from './SelectBox';
import NativePickers from './NativePickers';
import Button from './Button'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        // margin: theme.spacing(1),
        width: '300px',

        },
    },
    }));

    export default function BasicTextFields() {
        const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
            <p>기본정보 입력</p>
            <TextField id="outlined-basic" 
            name="email" 
            type="email" 
            label="이메일(아이디)를 입력하세요."
            variant="outlined"  
            />
            <TextField id="outlined-basic" label="비밀번호를 입력하세요." variant="outlined" />
            <TextField id="outlined-basic" label="회사명을 입력하세요" variant="outlined" />
            <SelectBox />
            <NativePickers />
            <Button />

        </form>
        </div>
    );
}