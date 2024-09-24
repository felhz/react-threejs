import{p as a}from"./earth_-FU1-d8Ot.js";import{u as n,j as o}from"./ssg-client-BOWj_B2R.js";import{M as i}from"./index-Di0FZPNf.js";import"./OrbitControls-L8OKkVCt.js";import"./GizmoViewport-CngC5H2D.js";const c=`import {
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useState } from 'react'
import * as THREE from 'three'
const isDev = import.meta.env.MODE === 'development'
function Com() {
  const radius = 10
  const arc = new THREE.ArcCurve(0, 0, radius + 10, 0, Math.PI * 2, false)
  const arcPoints = arc.getPoints(50)
  const [position, setPosition] = useState(new THREE.Vector2())
  const earth = useLoader(
    THREE.TextureLoader,
    isDev ? '/earth.jpg' : '/react-threejs/earth.jpg'
  )
  const start = new THREE.Spherical(radius + 0, (Math.PI / 180) * 0, 0)
  const start1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 45, 0)
  const center = new THREE.Spherical(radius + 3, (Math.PI / 180) * 90, 0)
  const center1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 135, 0)
  const end = new THREE.Spherical(radius + 0, (Math.PI / 180) * 180, 0)

  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3().setFromSpherical(start),
      new THREE.Vector3().setFromSpherical(start1),
      new THREE.Vector3().setFromSpherical(center),
      new THREE.Vector3().setFromSpherical(center1),
      new THREE.Vector3().setFromSpherical(end),
    ],
    false,
    'catmullrom',
    0.5
  )
  const curvePoints = curve.getPoints(100)
  useFrame((state) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    const t = (elapsed / 15) % 1
    const point = arc.getPointAt(t)
    setPosition(point)
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[radius]} />
        <meshStandardMaterial map={earth} />
      </mesh>
      <mesh>
        <Line points={arcPoints} color={new THREE.Color(0x00ff00)}></Line>
        <mesh position={[...position, 0]}>
          <sphereGeometry args={[1]} />
          <meshBasicMaterial
            color={new THREE.Color(0x0000ff)}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </mesh>
    </group>
  )
}

const Map = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ height: '80vh' }}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 80], fov: 45 }}
    >
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  )
}
export default Map
`,m=void 0,l=void 0,p={code:c,title:m,desc:l},u=!0,d=Object.freeze(Object.defineProperty({__proto__:null,default:i,demoMeta:p,isDemo:u},Symbol.toStringTag,{value:"Module"}));function r(e){const{Demo:t}={...n(),...e.components};return t||E("Demo"),o.jsx(t,{...d})}function h(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}function E(e,t){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const f=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=a;s.main=f;export{s as default};
