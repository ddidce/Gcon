import 'date-fns';
import React, { useState } from 'react';
import { ko } from "date-fns/locale";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    } from '@material-ui/pickers';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FormHelperText } from '@material-ui/core';
import '../css/font.css'

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                left : '-12.5%',
                width: '440px',
                height: '55px',
            },
            "& .MuiInputBase-root": {
                padding: 0,
                "& .MuiButtonBase-root": {
                    position: 'relative',
                    width : 0,
                    height : 0,
                    padding: 0,
                    paddingLeft: 10,
                },
                "& .MuiInputBase-input": {
                padding: 15,
                paddingLeft: 15,
                },
            }
        },
        arrow : {
            position: 'relative',
            right: '24px',
            fontSize : '50px',
            transform : 'scale(0.7, 1.5)',
            color : 'black',
        },
        }));

    // 텍스트 스타일링
    const fontStyle = {
        color : '#ff0000',
        position : 'relative',
        top : '-10px',
        left : '-58px',
        fontFamily : 'AppleSDFont',
    }

    const fPickers = {
        position : 'relative',
        top : '110px',
    }

    export default function MaterialUIPickers() {
        const classes = useStyles();
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ko}>
        <Grid container justify="space-around" className={classes.root} style={fPickers}>
            <KeyboardDatePicker
            disableToolbar
            inputVariant="outlined"  
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            placeholder="설립일을 선택하세요."
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            keyboardIcon={<ArrowDropDownIcon 
                            className={classes.arrow}
                        />}
            >
            </KeyboardDatePicker> 
            <FormHelperText style={fontStyle}>
                {selectedDate ?"완료되었습니다." : "필수 입력사항입니다."}
            </FormHelperText>
        </Grid>
        </MuiPickersUtilsProvider>
    );
}