import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './src/App';

describe('<App />', () => {
    it('폼 체크', () => {
        const { getByLabelText } = render(<App />);

        const email = getByLabelText('이메일(아이디)를 입력하세요.');
        const password = getByLabelText('비밀번호를 입력하세요.');
        const com = getByLabelText('회사명을 입력하세요');

        expect(email).toBeDisabled();

        fireEvent.change(email, { target: { value: 'user@test.com' } });
        fireEvent.change(password, { target: { value: 'Test1234' } });
        fireEvent.change(com, { target: { value: '회사' } });

        expect(email).toBeEnabled();
    });
});
