import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onPost('/api/login').reply(config => {
    const { userid, password } = JSON.parse(config.data);  // リクエストデータを取得

    console.log(config.data)
    if ( userid === 'test@example.com' && password === 'password') {
        return [200, { token: 'test token' }];
    } else {
        return [401, { error: 'email="test@example.com" and password="password"' }];
    }
});

mock.onGet('api/otp').reply(config => {
    const { otp } = JSON.parse(config.data);  // リクエストデータを取得

    console.log(config.data);
    if (otp === '123456') {
        return [ 200, { token: 'test token' }]; 
    } else {
        return [ 401, { error: 'otp="123456"' }];
    }
});

export default mock;
