import { Box, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
console.log(THREE)
let spotLight = new THREE.SpotLight(0x00ffff, 1000, 100, Math.PI / 18, 0.5, 1)

spotLight.position.set(2, 15, 0)
spotLight.castShadow = true
const TextD = () => {
  return (
    <>
      <Box args={[1, 1, 1]} position={[1, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'red'} />
      </Box>
      <spotLight
        castShadow={true}
        args={[0xffffff, 1, 100, Math.PI / 18, 0.3, 0.01]}
        position={[-2, 15, 0]}
      />
      {/* <SpotLight
        args={[new THREE.Color(0xff0000), 1, 1, Math.PI / 1, 0, 0.1]}
        castShadow={true}
        position={[5, 5, 0]}
      ></SpotLight> */}
      <directionalLight
        castShadow={true}
        args={[0xffffff, 1]}
        position={[5, 12, 0]}
      ></directionalLight>
      <Sphere args={[1, 32, 32]} position={[5, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'red'} opacity={0.1} />
      </Sphere>
      <mesh
        receiveShadow={true}
        rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const Light = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false }}
        shadows={true}
        // scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 7, 7], fov: 70 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />
      </Canvas>
    </div>
  )
}

export default Light
