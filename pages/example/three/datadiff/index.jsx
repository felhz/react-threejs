import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  SpotLight,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { forwardRef, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = forwardRef(
  ({ value = 5, text = '未设置', axisX = 0, img }, ref) => {
    useEffect(() => {}, [])
    const bar = {
      width: 2,
      z: 3,
      img: {
        height: 2,
      },
    }
    const texture = useTexture(staticPath + '/diff/bar.jpg')
    const flagTexture = useTexture(staticPath + '/diff/us.jpeg')
    const itemTexture = useTexture(`${staticPath}/diff/${img || 'kele.jpeg'}`)

    texture.repeat.set(0.2, 1)
    // 反转纹理
    // texture.flipY = false

    return (
      <mesh position={[axisX, 0, 0]} ref={ref}>
        <Center top>
          <Box
            castShadow={true}
            args={[bar.width, value, bar.z]}
            material={
              new THREE.MeshStandardMaterial({
                // color: new THREE.Color(0xff0000),
                opacity: 1,
                shininess: 100,
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
          color={'#000'}
          position={[0, value - bar.img.height - 0.5, bar.z / 2 + 0.1]}
        >
          {text}
        </Text>
        <Plane
          args={[bar.width, bar.img.height]}
          position={[0, value - bar.img.height / 2, bar.z / 2 + 0.1]}
          material={
            new THREE.MeshStandardMaterial({
              map: itemTexture,
              side: THREE.DoubleSide,
            })
          }
        ></Plane>
        <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.1]}>
          <planeGeometry args={[2, 2, 10]} />
          <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
        </mesh>
        <Text
          anchorY={'top'}
          fontSize={1}
          scale={0.8}
          maxWidth={3}
          color={'#000'}
          position={[0, 0, bar.z]}
        >
          {`销量:${value}w`}
        </Text>
      </mesh>
    )
  }
)

function Com() {
  const { camera, scene } = useThree()
  const current = useRef(0)
  const barRef = useRef({})
  const lightRef = useRef()
  const spoitLightRef = useRef()

  const data = [
    { value: 5, text: '其他饮品' },
    { value: 7, text: '百事可乐', img: 'baishi.webp' },
    { value: 10, text: '可口可乐', img: 'kele.jpeg' },
  ]

  useEffect(() => {
    window.camera = camera
    setInterval(() => {
      let target = barRef.current[current.current]
      lightRef.current.target = target
      lightRef.current.position.x = target.position.x
      spoitLightRef.current.target = target
      spoitLightRef.current.position.x = target.position.x
      if (current.current >= data.length - 1) {
        current.current = 0
      } else {
        current.current += 1
      }
    }, 1000)
  }, [])
  return (
    <>
      <SpotLight
        color={0x00ffff}
        distance={30}
        angle={Math.PI / 3}
        attenuation={31}
        anglePower={0.4}
        ref={spoitLightRef}
        position={[0, 31, 0]}
      ></SpotLight>
      <spotLight
        ref={lightRef}
        castShadow={true}
        args={[0xffffff, 10, 40, Math.PI / 10, 0.4, 0.1]}
        position={[0, 30, 7]}
      />
      {data.map((item, index) => {
        let ref = (el) => {
          barRef.current[index] = el
        }
        // 间距增量
        let space = 12
        let axisX = index * space
        return <Bar ref={ref} {...item} key={index} axisX={axisX} />
      })}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        shadows={true}
        // scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 25, 30], fov: 45 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />

        <Plane
          args={[100, 100]}
          position={[0, -1, 0]}
          receiveShadow={true}
          rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        >
          <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
        </Plane>
      </Canvas>
    </div>
  )
}

export default DataDiff
