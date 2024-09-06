import { useGLTF } from '@react-three/drei'
import React from 'react'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'


import CloudScene from '../assets/3d/cloudymtn.glb'

const Cloud = ({isRotating}) => {
    const cloud = useGLTF(CloudScene);
    const cloudRef = useRef();

    useFrame((_, delta) => {
        if(isRotating) {
            cloudRef.current.rotation.y += 0.25 * delta;
        }
    })

  return (
    <mesh  position = {[1,1,1]}
    scale = {[7,7,7]}
    ref = {cloudRef}>

<primitive object ={cloud.scene}/>;

    </mesh>
  )
}

export default Cloud