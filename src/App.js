import React, { useState } from 'react';
import './css/App.css';
import './css/font.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SelectBox from './components/SelectBox';
import NativePickers from './components/NativePickers';
import Radio from './components/Radio';
import LangSelect from './components/LangSelect'
import { FormHelperText, Link } from '@material-ui/core';

//라이브러리 스타일
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        position : 'relative',
        top : '68px',
        display : 'flex',
        marginRight :'72px',
        marginLeft :'73px',
        },
        
    lang : {
        width: '51px',
        height: '18px',
        fontFamily: 'NotoSansCJKkr',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000',
    },

    outlinedBasic : {
        position : 'relative',
        top : '50px'
    }
    },
    }));

                                    //컴포넌트 스타일

    //텍스트 
    const fontStyle = {
        left : '15px',
        color : '#ff0000',
        fontFamily : 'AppleSDFont',
        top: '70px'
    }

    const fontStyle_se = {
        color : '#ff0000',
        left : '15px',
        top : '85px',
        fontSize : '12px',
        letterSpacing : '0.1px',
        width: '461px',
        fontFamily : 'AppleSDFont',
    }

    const fontStyle_th = {
        color : '#ff0000',
        left : '15px',
        top : '100px',
        fontFamily : 'AppleSDFont',
    }

    const loginButton = {
        color : 'rgba(0, 0, 0, 0.5)', 
        textDecoration : 'underLine',
        fontFamily : 'Roboto',
        fontWeight : 600,
        fontSize: '16px',
        letterSpacing: '-2.15px',
    }

    const nextButton = {
        color : '#fff',
    }

    //컴포넌트
    const fTextFields = {
        position : 'relative',
        top : '70px',
        color : 'red',
    }

    const sTextFields = {
        position : 'relative',
        top : '85px',
    }

    const tTextFields = {
        position : 'relative',
        top : '100px',
    }

    const buttonStyle = {
        position : 'relative',
        top : '90px',
    }

    const langStyle = {
        position : 'relative',
        top: '155px',
        left: '5px',
        fontSize : '12px',
    }

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
        }
        else {

        }
        console.log(checkedE.test(password));
    }

    const handleCompany = e => {
        setCompany(e.target.value);
    }

    console.log({
        email,
        password,
        company
        });


    return (
        <div className="form-content">
            <form className={classes.root} noValidate autoComplete="off">
            <h2>GconStudio 계정 만들기</h2>
            <p className="sub_title">하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</p>
            <Radio/>

            <p className="info_content">기본정보 입력</p>
            <TextField 
                style={fTextFields}
                className="outlined-basic" 
                label="이메일(아이디)를 입력하세요." 
                variant="outlined"
                onChange={handleEmail}
                value={email}
                onKeyPress = {checkedEmail.bind()}
            />
            <FormHelperText style={fontStyle}>
                    {checkedE.test(email) ? '올바른 이메일 입니다.' : '이메일 양식을 확인하세요'}
            </FormHelperText>

            <TextField 
                style={sTextFields} 
                className={classes.outlinedBasic} 
                label="비밀번호를 입력하세요." 
                variant="outlined"
                type="password"
                maxLength ={16}
                onChange={handlePassword}
                value={password}
                onKeyPress= {checkedPassword.bind()}
            />
            <FormHelperText style={fontStyle_se}>
                {checkedPass.test(password) ?
                    '올바른 비밀번호 입니다.' :
                    '비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다'
            }</FormHelperText>

            
            <TextField 
                style={tTextFields}
                className="outlined-basic" 
                label="회사명을 입력하세요"
                variant="outlined"
                onChange={handleCompany}
                value={company}
            />
            <FormHelperText style={fontStyle_th}>
                {
                    company ? "완료되었습니다." : "필수 입력사항입니다."
                }
            </FormHelperText>
            <SelectBox />
            <NativePickers />
            <div style ={buttonStyle}>
                <button className="fButton">
                    <Link style={nextButton}>다음</Link>
                </button>

                <button className="sButton" >
                    <Link style={loginButton}>로그인</Link>
                </button>
            </div>
        </form>
        <div className="lang" style={langStyle}>
            <LangSelect className={classes.lang}/>
        </div>
        </div>
    );
}