import React from 'react';


export default function ServiceCard({data}) {
  return (
    <div className='Service-card'>
        <img  className='Services-img' src={data.img} alt='/'/>
        <p>{data.desc} </p>
    </div>
  );
}
