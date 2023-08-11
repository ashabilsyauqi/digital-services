import React from 'react';
import Profile from './UI/Profile';
import Ashabil from './assets/Ellipse 1.png'
import Aqsha from './assets/Ellipse 1@2x-1.png'
import Pandji from './assets/Ellipse 1@2x-2.png'
import Vattar from './assets/Ellipse 1@3x-3.png'

export default function Member() {
    const members=[
        {name: "Ashabil", position:"FrontEnd", gambar:Ashabil},
        {name: "Aqsha", position:"BackEnd", gambar:Aqsha},
        {name: "Pandji", position:"UI UX", gambar:Pandji},
        {name: "Vattar", position:"Graphic Designer", gambar:Vattar},
    ]
  return (
    <div className='Member flex-center'>
    {members.map((data, index) => (
        <Profile key={index} data={data} />
      ))}
    </div>
  );
}
