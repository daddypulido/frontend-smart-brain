import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './Particlesheet.css';
import particlesOptions from "./particles.json";



function ParticlesOne() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div >
            <Particles options={particlesOptions} init={particlesInit}/>
            
        </div>
    );
}

export default ParticlesOne;
