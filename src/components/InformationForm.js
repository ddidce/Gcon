import React, { useState } from 'react';
import '../css/App.css';
import '../css/font.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MoneySelect from './MoneySelect';
import DatePicker from './DatePicker';
import Radio from './Radio';
import LangSelect from './LangSelect';
import { FormHelperText, Link } from '@material-ui/core';

//이메일 유효성검사
const checkedE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//패스워드 유효성검사
const checkedPass = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;

//라이브러리 스타일
const useStyles = makeStyles((theme) => ({
    infoForm: {
        '& > *': {
            position: 'relative',
            top: '68px',
            display: 'flex',
            marginRight: '72px',
            marginLeft: '73px',
        },

        lang: {
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

        outlinedBasic: {
            position: 'relative',
            top: '50px',
        },
    },
}));

//컴포넌트 스타일

//아이디 텍스트 필드
const idTextFields = {
    position: 'relative',
    top: '70px',
    color: 'red',
};

//아이디 헬퍼 텍스트
const idSubTxt = {
    left: '15px',
    color: '#ff0000',
    fontFamily: 'AppleSDFont',
    top: '70px',
};

//비밀번호 텍스트 필드
const pwdTextFields = {
    position: 'relative',
    top: '85px',
};

//패스워드 헬퍼 텍스트
const pwdSubTxt = {
    color: '#ff0000',
    left: '15px',
    top: '85px',
    fontSize: '12px',
    letterSpacing: '0.1px',
    width: '461px',
    fontFamily: 'AppleSDFont',
};

//회사 텍스트 필드
const companyTextFields = {
    position: 'relative',
    top: '100px',
};

//회사 헬퍼 텍스트
const companySubTxt = {
    color: '#ff0000',
    left: '15px',
    top: '100px',
    fontFamily: 'AppleSDFont',
};

//로그인 버튼
const loginButton = {
    color: 'rgba(0, 0, 0, 0.5)',
    textDecoration: 'underLine',
    fontFamily: 'Roboto',
    fontWeight: 600,
    fontSize: '16px',
    letterSpacing: '-2.15px',
};

//다음 버튼
const nextButton = {
    color: '#fff',
};

const button = {
    position: 'relative',
    top: '90px',
};

//언어 선택
const langSelect = {
    position: 'relative',
    top: '155px',
    left: '5px',
    fontSize: '12px',
};

export default function BasicTextFields() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState(null);

    //이메일 핸들링
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const checkedEmail = () => {
        if (checkedE.test(email)) {
        } else {
        }
    };

    //패스워드 핸들링
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    //패스워드 유효성검사
    const checkedPassword = () => {
        if (checkedPass.test(password)) {
        } else {
        }
    };

    const handleCompany = (e) => {
        setCompany(e.target.value);
    };

    return (
        <div className="form-content">
            <form className={classes.infoForm} noValidate autoComplete="off">
                <h2>GconStudio 계정 만들기</h2>
                <p className="sub_title">
                    하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수
                    있습니다.
                </p>

                {/* 라디오 컴포넌트 */}
                <Radio />

                <p className="info_content">기본정보 입력</p>
                <TextField
                    style={idTextFields}
                    className="outlined-basic"
                    label="이메일(아이디)를 입력하세요."
                    variant="outlined"
                    onChange={handleEmail}
                    value={email}
                    onKeyPress={checkedEmail.bind()}
                />
                <FormHelperText style={idSubTxt}>
                    {checkedE.test(email)
                        ? '올바른 이메일 입니다.'
                        : '이메일 양식을 확인하세요'}
                </FormHelperText>

                <TextField
                    style={pwdTextFields}
                    className={classes.outlinedBasic}
                    label="비밀번호를 입력하세요."
                    variant="outlined"
                    type="password"
                    maxLength={16}
                    onChange={handlePassword}
                    value={password}
                    onKeyPress={checkedPassword.bind()}
                />
                <FormHelperText style={pwdSubTxt}>
                    {checkedPass.test(password)
                        ? '올바른 비밀번호 입니다.'
                        : '비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다'}
                </FormHelperText>

                <TextField
                    style={companyTextFields}
                    className="outlined-basic"
                    label="회사명을 입력하세요"
                    variant="outlined"
                    onChange={handleCompany}
                    value={company}
                />
                <FormHelperText style={companySubTxt}>
                    {company ? '완료되었습니다.' : '필수 입력사항입니다.'}
                </FormHelperText>

                {/* 화폐단위 셀렉트 박스 */}
                <MoneySelect />

                {/* 날짜 선택 */}
                <DatePicker />

                <div style={button}>
                    <button className="fButton">
                        <Link style={nextButton}>다음</Link>
                    </button>

                    <button className="sButton">
                        <Link style={loginButton}>로그인</Link>
                    </button>
                </div>
            </form>
            <div className="lang" style={langSelect}>
                <LangSelect className={classes.lang} />
            </div>
        </div>
    );
}
