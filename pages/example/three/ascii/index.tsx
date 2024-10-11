import {
  AsciiRenderer,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

function Com() {
  return <group position={[-15, 0, 0]}></group>
}

const Geo = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ height: '60vh' }}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, -50, 50], fov: 45 }}
    >
      <OrbitControls />
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <AsciiRenderer characters="#" />
      <Com />
    </Canvas>
  )
}
export default Geo
