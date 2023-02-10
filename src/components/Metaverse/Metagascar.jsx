import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const model = useRef();
  const gltf = useLoader(GLTFLoader, 'studiocity.gltf');

  return (
    <primitive ref={model} object={gltf.scene} />
  );
};

const GLTFViewer = () => {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
};

export default Metagascar;
