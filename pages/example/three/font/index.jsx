import { OrbitControls, Text3D } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const Text = () => {
  const loader = new FontLoader()

  useEffect(() => {
    loader.load('/font/bold.json', function (font) {
      const geometry = new TextGeometry('Hello!', {
        font: font,
        size: 5,
        depth: 1,
      })
      text.current.geometry = geometry
    })
  }, [])
  useFrame(() => {
    text.current.rotation.y += 0.01
  })
  const text = useRef()
  return (
    <>
      <mesh ref={text}>
        <meshNormalMaterial />
      </mesh>
      <Text3D font={'/font/bold.json'} position={new THREE.Vector3(10, 0, 0)}>
        wooo <meshNormalMaterial />
      </Text3D>
    </>
  )
}

function Com() {
  return <Text>4</Text>
}
const Sphereg = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ alpha: false }}
        scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 0, -70], fov: 45 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
      </Canvas>
    </div>
  )
}

export default Sphereg
