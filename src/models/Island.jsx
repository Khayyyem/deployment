/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import { useFrame, useThree } from '@react-three/fiber';
import islandScene from '../assets/3d/death_stranding-rest.glb'

const Island=({ isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef=useRef();

    const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene)

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        lastX.current = clientX;
    }


    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if(isRotating){     const clientX = e.touches ? e.touches[0].clientX : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;
    
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta *0.01*Math.PI;
        }
        
    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowRight') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
            } else if (e.key === 'ArrowLeft') {
                if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
            }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;
            const normalizedRotation =
            ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        
          // Set the current stage based on the island's orientation
          switch (true) {
            case normalizedRotation >= 5.15 && normalizedRotation <= 6.00: //5.45 // 5.85
              setCurrentStage(4);
              break;
            case normalizedRotation >= 0.20 && normalizedRotation <= 1.3: //1.3  //0.85
              setCurrentStage(3);
              break;
            case normalizedRotation >= 1.8 && normalizedRotation <= 3.3:  //2.4 //
              setCurrentStage(2);
              break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
              setCurrentStage(1);
              break;
            default:
              setCurrentStage(null);
          }
        }
    })

   


    useEffect(() => {
        // Add event listeners for pointer, keyboard and touch events
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("touchstart", handlePointerDown);
        canvas.addEventListener("touchmove", handlePointerMove);
        canvas.addEventListener("touchend", handlePointerUp);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
      
        // Remove event listeners
        return () => {
          canvas.removeEventListener("pointerdown", handlePointerDown);
          canvas.removeEventListener("pointerup", handlePointerUp);
          canvas.removeEventListener("pointermove", handlePointerMove);
          canvas.removeEventListener("touchstart", handlePointerDown);
          canvas.removeEventListener("touchmove", handlePointerMove);
          canvas.removeEventListener("touchend", handlePointerUp);
          window.removeEventListener("keydown", handleKeyDown);
          window.removeEventListener("keyup", handleKeyUp);
        }
        }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);


  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['.001']}
        position={[1.403, -4.228, 2.419]}
        scale={[1.412, 0.56, 0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.ground}
        position={[3.2, -2.278, 5.731]}
        rotation={[1.396, -1.218, 1.676]}
        scale={[4.497, 2.182, 3.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.bike}
        position={[0.302, -2.176, 2.517]}
        rotation={[-3.1, 0.71, 2.718]}
        scale={[0.241, 0.241, 0.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.wheel}
        position={[1.376, -2.139, 2.745]}
        rotation={[1.327, 0.317, -2.386]}
        scale={[0.352, 0.071, 0.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.box_rock}
        position={[3.389, -1.599, 5.454]}
        scale={[0.317, 0.416, 0.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material}
        position={[2.349, 0.785, 8.1]}
        scale={0.281}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['else']}
        position={[2.349, 0.785, 7.605]}
        rotation={[0, 1.061, 0]}
        scale={0.281}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.clothes}
        position={[2.349, -0.173, 7.605]}
        scale={0.342}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material_8}
        position={[1.376, -2.139, 2.745]}
        rotation={[1.327, 0.317, -2.386]}
        scale={[0.352, 0.071, 0.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.material_8}
        position={[0.302, -2.176, 2.517]}
        rotation={[-3.1, 0.71, 2.718]}
        scale={[0.241, 0.241, 0.095]}
      />
    </a.group>
  )
}

useGLTF.preload('/island.glb')

export default Island;