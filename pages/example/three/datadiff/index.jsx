import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = ({ value = 5, text = '未设置', axisX = 0 }) => {
  useEffect(() => {}, [])
  const bar = {
    width: 2,
    z: 3,
    img: {
      height: 2,
    },
  }
  const texture = useTexture(staticPath + '/pano/bar.jpg')
  const flagTexture = useTexture(staticPath + '/diff/us.jpeg')

  texture.repeat.set(0.2, 1)
  // 反转纹理
  // texture.flipY = false

  return (
    <mesh position={[axisX, 0, 0]}>
      <Center top>
        <Box
          args={[bar.width, value, bar.z]}
          material={
            new THREE.MeshLambertMaterial({
              color: new THREE.Color(0x00ff00),
              opacity: 0.5,
              // map: texture,
            })
          }
        />
      </Center>
      <Text
        anchorY={'top'}
        fontSize={1}
        scale={0.5}
        maxWidth={3}
        color={'blue'}
        position={[0, value - bar.img.height, bar.z / 2 + 0.1]}
      >
        {text}
      </Text>
      <Plane
        args={[bar.width, bar.img.height]}
        position={[0, value - bar.img.height / 2, bar.z / 2 + 0.1]}
        material={
          new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(staticPath + '/diff/kele.jpeg'),
            side: THREE.DoubleSide,
          })
        }
      ></Plane>
      <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.3]}>
        <planeGeometry args={[2, 2, 10]} />
        <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
      </mesh>
    </mesh>
  )
}

function Com() {
  const { camera } = useThree()
  const current = useRef(1)
  const data = [
    { value: 5, text: '可口可乐' },
    { value: 10, text: '可口可乐' },
    { value: 15, text: '可口可乐' },
  ]
  useEffect(() => {
    camera.lookAt(camera.position.x, 0, 0)
    camera.position.x = 
    // setInterval(() => {
    //   if (current.current > data.length) {
    //     current.current = 0
    //     camera.position.x = 0
    //   }
    //   camera.position.x += 3.5
    //   camera.lookAt(camera.position.x, 0, 0)
    //   debugger
    //   current.current += 1
    // }, 1000)
  }, [])
  return (
    <>
      {data.map((item, index) => (
        <Bar {...item} key={index} axisX={index * 7} />
      ))}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xffffff) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 20], fov: 70 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
      </Canvas>
    </div>
  )
}

export default DataDiff
