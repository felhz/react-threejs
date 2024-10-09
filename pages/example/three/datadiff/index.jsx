import { Box, Environment, OrbitControls, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const TextD = () => {
  useEffect(() => {}, [])

  useFrame(() => {
    // console.log(pivotControl.current.rotation)
    // text.current.rotation.z += 0.01
  })
  const text = useRef()

  return (
    <>
      <mesh ref={text}>
        <meshNormalMaterial />
      </mesh>
      <mesh ref={text}>
        <Box args={[1, 4, 1]} />
        <meshNormalMaterial />
      </mesh>
      <Text fontSize={1} position={[0, 5, 0]}>
        旋转文字
      </Text>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xffffff) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 40], fov: 70 }}
      >
        <Environment
          background={true} // can be true, false or "only" (which only sets the background) (default: false)
          files="/pano/city.jpg" // link to the hdr
        />
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
      </Canvas>
    </div>
  )
}

export default DataDiff
