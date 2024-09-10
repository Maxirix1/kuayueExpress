import React from 'react';
import '../style/FormSection.css';

function FormSection({ title, color }) {
  return (
    <div className={`form-section ${color}`}>
      <h3>{title}</h3>
      <div className="input-group">
        <label>สาขา:</label>
        <select>
          <option>{'สาขาที่ประจำอยู่'}</option>
        </select>
      </div>
      <div className="input-group">
        <label>เบอร์ผู้สั่ง:</label>
        <input type="text" placeholder="+66" />
      </div>
      <div className="input-group">
        <label>ชื่อผู้สั่ง:</label>
        <input type="text" placeholder="Name Lastname" />
      </div>
      <div className="input-group">
        <label>หมายเหตุ:</label>
        <textarea placeholder="เพิ่มหมายเหตุ"></textarea>
      </div>
    </div>
  );
}

export default FormSection;
