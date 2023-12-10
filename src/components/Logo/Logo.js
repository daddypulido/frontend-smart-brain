import React from 'react';
import {Tilt} from 'react-tilt';
import './Logo.css';
import brain from './brain_109827.png'
import 'tachyons'



const Logo = () => {
    return (
       <div className='ma4 mt0'>
         <Tilt className='Tilt br2 shadow-2'style={{ height: 150, width: 150 }}>
        <div className='Tilt-innner pa3'>
         <img style={{paddingTop: '20px'}}alt='logo' src={brain}/>
         </div>
    </Tilt>
       </div>
    )
}


export default Logo