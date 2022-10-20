import React from 'react';
import './planet-container.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlanetEarth from "./planet-earth";



const Background = () => {
    return (
        <div className='background--section'>
            <Canvas >
                <directionalLight intensity={0.7} />
                <OrbitControls 
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    enableZoom={false}
                    />
                <PlanetEarth />
            </Canvas>
        </div>
    )
}

export default Background;
