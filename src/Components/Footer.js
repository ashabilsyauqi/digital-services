import React from "react";
import company from './assets/React-icon.svg.png'
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="wrapper flex-center gap">
        <div className="Footer-text">
        <p>Perusahaan kita begerak di Digital Kreatif , membantu pembuatan website dan landing Pages untuk usaha skala mikro</p>
        <ul className="Footer-info">
            <li>Email@email.com</li>
            <li>(021)312312</li>
            <li>Jalan Zamrud 12 no 19 Kota Bekasi</li>
            <li>3VHSGroup.com</li>
        </ul>
        </div>
      
            <img src={company} alt="Company Logo" className="Footer-img" /> 
        </div>
      </div>
    </>
  );
}
