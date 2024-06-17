import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Otp.css';

const Otp = () => {
  const [authCode, setAuthCode] = useState('');
  const navigate = useNavigate(); 
  const location = useLocation();
  const { userid } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 本来はここで認証コードの検証を行います
    // 検証成功後、TOP画面に遷移

    try {
      const otp = authCode
      const response = await axios.get('/api/otp', {otp});
    } catch (error) {
      alert(`認証失敗. ${error.message}`);
      return;
    }

    navigate('/top', { state: { userid } });
  };

  return (
    <div className="authcode-container">
      <form className="authcode-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID: {userid}</label>
        </div>
        <h1>認証コード入力</h1>
        <div className="form-group">
          <label>認証コード: </label>
          <input
            type="text"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Otp;
