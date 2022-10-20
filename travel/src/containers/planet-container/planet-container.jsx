import React from 'react';
import './planet-container.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./planet";



const PlanetContainer = () => {
    return (
        <div className='background--section'>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
        </div>
    )
}

export default PlanetContainer;
