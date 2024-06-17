import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // 本来はここで認証APIを呼び出します
    // 認証成功後、認証コード入力画面に遷移
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { userid, password });
      console.log('認証成功');
    } catch (error) {
      alert(`認証失敗. ${error.message}`);
      return;
    }
    navigate('/otp',{ state: { userid } });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>ログイン画面</h1>
        <div className="form-group">
          <label>ID: </label>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>パスワード: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
