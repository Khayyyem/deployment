import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Birds from '../models/Birds';
import HomeInfo from '../components/HomeInfo';

import asy from '../assets/song/winds.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(asy));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (isPlayingMusic) {
        audioRef.current.play().catch((error) => {
          console.error('Autoplay prevented:', error);
        });
      } else {
        audioRef.current.pause();
      }
    };

    playAudio();

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  useEffect(() => {
    const handleInteraction = () => {
      audioRef.current.muted = false;
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 6, -55];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
    } else {
      screenScale = [4.5, 4.5, 4.5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1, far: 1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[3, 10, -8]} intensity={5} />
          <ambientLight intensity={.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2.6} />

          <Birds />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
