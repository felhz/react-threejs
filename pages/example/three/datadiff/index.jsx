import {
  Box,
  Center,
  Environment,
  OrbitControls,
  Plane,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = ({ value = 5, text = '未设置', axisX = 0 }) => {
  useEffect(() => {}, [])
  const bar = {
    width: 3,
    z: 3,
    img: {
      height: 2,
    },
  }
  const texture = useTexture(staticPath + '/pano/bar.jpg')
  texture.repeat.set(0.2, 1)
  // 反转纹理
  // texture.flipY = false

  return (
    <mesh position={[axisX, 0, 0]}>
      <Center top>
        <Box
          args={[bar.width, value, bar.z]}
          material={
            new THREE.MeshBasicMaterial({
              color: new THREE.Color(0xffffff),
              map: texture,
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
            map: new THREE.TextureLoader().load(staticPath + '/diff/us.jpeg'),
            side: THREE.DoubleSide,
          })
        }
      ></Plane>
    </mesh>
  )
}

function Com() {
  const data = [
    { value: 5, text: '未设置' },
    { value: 10, text: '已设置' },
    { value: 15, text: '已设置' },
  ]
  return (
    <>
      {data.map((item, index) => (
        <Bar {...item} key={index} axisX={index * 5} />
      ))}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xffffff), castShadow: true }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 20], fov: 70 }}
      >
        <Environment
          background={true}
          files={staticPath + '/pano/jizhuangxhdr.jpg'}
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
