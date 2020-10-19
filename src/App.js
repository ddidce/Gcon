import React, { useState } from 'react';
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
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [company , setCompany] = useState(null);

    //이메일 핸들링
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    //이메일 유효성검사
    const checkedE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const checkedPass = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;

    const checkedEmail = () => {
            if (checkedE.test(email) === true){
            }
            else{
            }

            console.log(checkedE.test(email));
        }

    //패스워드 핸들링
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    //패스워드 유효성검사
    const checkedPassword = () => {
        if(checkedPass.test(password) === true) {
            // alert("올바름")
        }
        else {

        }
        console.log(checkedE.test(password));
    }

    const handleCompany = e => {
        setCompany(e.target.value);
    }

    // const checkCom = () => {
    //     if(company === null) {
    //         console.log("입력해주세요");
    //     } else {
    //         console.log("입력되었습니다.");
    //     }
    // }

    console.log({
        email,
        password,
        company
        });


    return (
        <div className="form1">
            <form className={classes.root} noValidate autoComplete="off">
            <Radio />
            <p>기본정보 입력</p>
            <TextField 
                className="outlined-basic" 
                label="이메일(아이디)를 입력하세요." 
                variant="outlined"
                onChange={handleEmail}
                value={email}
                onKeyPress = {checkedEmail.bind()}
                helperText= {
                    <>
                        {checkedE.test(email) ? '올바른 이메일 입니다.' : '이메일 양식을 확인하세요'}
                    </>
                }
            />

            <TextField 
                className="outlined-basic" 
                label="비밀번호를 입력하세요." 
                variant="outlined"
                type="password"
                maxLength ={16}
                onChange={handlePassword}
                value={password}
                onKeyPress= {checkedPassword.bind()}
                helperText= {
                    <>
                        {checkedPass.test(password) ?
                        '올바른 비밀번호 입니다.' :
                        '비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다'
                        }
                    </>
                }
            />
            <TextField 
                className="outlined-basic" 
                label="회사명을 입력하세요"
                variant="outlined"
                onChange={handleCompany}
                value={company}
                // onKeyPress={checkCom.bind()}
                helperText ={
                    company ? "완료되었습니다." : "필수 입력사항입니다."
                }
            />
            <SelectBox />
            <NativePickers />
            <Button />

        </form>
        </div>
    );
}