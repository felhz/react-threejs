import { OrbitControls, Plane } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
// import anime from 'animejs/lib/anime.es.js'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// console.log(anime)
function Com() {
  const { camera } = useThree()
  const boxRef = useRef()
  const boxRef2 = useRef()
  useEffect(() => {
    // anime({
    //   targets: boxRef.current.position,
    //   z: 2 * Math.PI,
    //   duration: 1000,
    //   easing: 'linear',
    //   loop: true,
    //   direction: 'alternate',
    // })
    // boxRef.current
    // boxRef2.current.updateMatrixWorld()
    // boxRef2.current.updateMatrix()
    // let matrix4 = new THREE.Matrix4()
    // matrix4.makeRotationX(Math.PI / 4)
    // boxRef2.current.applyMatrix4(matrix4)
    // boxRef2.current.translateX(-5)
  }, [])

  return (
    <>
      <mesh ref={boxRef} castShadow={true}>
        <meshBasicMaterial color="red" opacity={0.1} />
        <boxGeometry args={[1, 1, 1]} translateX={1} />
      </mesh>
      <mesh ref={boxRef2} castShadow={true} position={[2, 0, 0]}>
        <meshBasicMaterial color="red" opacity={0.1} />
        <boxGeometry args={[1, 1, 1]} translateX={1} />
      </mesh>
      <mesh castShadow={true} position={[10, 0, 0]}>
        <meshBasicMaterial color="red" opacity={0.1} />
        <boxGeometry args={[1, 1, 1]} translateX={1} />
      </mesh>
    </>
  )
}
const Rotation = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        shadows={true}
        scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [10, 20, 37], fov: 45 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
        <directionalLight
          args={[0xffffff, 10]}
          position={[0, 20, 20]}
          castShadow={true}
        />
        <Plane
          args={[100, 100]}
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow={true}
        >
          <meshStandardMaterial side={THREE.DoubleSide} />
        </Plane>
      </Canvas>
    </div>
  )
}

export default Rotation
