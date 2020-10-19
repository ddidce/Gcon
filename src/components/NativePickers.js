import 'date-fns';
import React from 'react';
import { ko } from "date-fns/locale";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    } from '@material-ui/pickers';
import { InputAdornment } from '@material-ui/core';

    export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ko}>
        <Grid container justify="space-around">
            <KeyboardDatePicker
            disableToolbar
            inputVariant="outlined"  
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            InputProps = {{
                endAdornment : (
                    <InputAdornment position="end" className="select">

                    </InputAdornment>
                )
            }}
            />
        </Grid>
        </MuiPickersUtilsProvider>
    );
}