import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="date-info">
        วันที่ XX/XX/XX<br />
        XX:XX
      </div>
      <div className="user-info">
        <span>{'{ USERNAME }'} | { 'ตำเเหน่งโกดัง หรือ สาขาที่ประจำอยู่' }</span>
        <button className="home-btn">หน้าแรก</button>
      </div>
    </div>
  );
}

export default Header;
