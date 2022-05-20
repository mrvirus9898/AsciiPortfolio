import React from "react";
import {Canvas} from "@react-three/fiber";

import './App.css';

function Box(){
    return(
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="blue" />
        </mesh>
    )
}

export default function threejs(){
    return <Canvas>
        <Box />
    </Canvas>;
}