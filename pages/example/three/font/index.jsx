import {
  Billboard,
  OrbitControls,
  PivotControls,
  Text,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const TextD = () => {
  const loader = new FontLoader()

  useEffect(() => {
    loader.load('/font/bold.json', function (font) {
      const geometry = new TextGeometry('Hello!', {
        font: font,
        size: 3,
        depth: 1,
      })
      text.current.geometry = geometry
    })
    // pivotControl.current.matrix.makeRotationZ
    window.pivotControl = pivotControl.current
  }, [])
  const handleBillboardClick = (e) => {
    console.log('Billboard clicked', e)
  }
  useFrame(() => {
    // console.log(pivotControl.current.rotation)
    // text.current.rotation.z += 0.01
  })
  const text = useRef()
  const pivotControl = useRef()

  return (
    <>
      <mesh ref={text}>
        <meshNormalMaterial />
      </mesh>
      <PivotControls ref={pivotControl} anchor={[0, 0, 0]}>
        <Text fontSize={1} position={[0, 5, 0]}>
          旋转文字
        </Text>
      </PivotControls>

      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text fontSize={1} position={[0, 10, 0]} onClick={handleBillboardClick}>
          面向相机的文字
        </Text>
      </Billboard>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const Sphereg = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false }}
        scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 0, -40], fov: 70 }}
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
