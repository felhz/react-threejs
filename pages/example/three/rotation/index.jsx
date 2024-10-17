import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

function Com() {
  const { camera } = useThree()
  const boxRef = useRef()
  useFrame(() => {
    // boxRef.current.rotation.z += 0.01
  })
  return (
    <>
      <mesh ref={boxRef}>
        <meshBasicMaterial color="red" opacity={0.1} />
        <boxGeometry args={[1, 1, 5]} translateX={1} />
      </mesh>
    </>
  )
}
const Rotation = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 37], fov: 45 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
        <directionalLight position={[0, 20, 20]} />
      </Canvas>
    </div>
  )
}

export default Rotation
