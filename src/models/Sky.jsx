import { useGLTF } from '@react-three/drei'
import React from 'react'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'


import skyScene from '../assets/3d/free_-_skybox_anime_sky.glb'

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
       // if(isRotating) {
            skyRef.current.rotation.y += 0.2 * delta;
        //}
    })

  return (
    <mesh ref = {skyRef}>

<primitive object ={sky.scene}/>;

    </mesh>
  )
}

export default Sky