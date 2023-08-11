import React from 'react';
// import gambar from '../assets/UI-UX-Design.jpg'
export default function Profile({data}) {
  return (
    <div className='Profile-card'>
        <img src={data.gambar} alt={data.name} className='Profile' />
        <h2>{data.name}</h2>
        <p>{data.position}</p>
    </div>
    
  );
}
