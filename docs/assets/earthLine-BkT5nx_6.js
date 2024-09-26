import{p as s}from"./earthLine_-FU1-d8Ot.js";import{u as r,j as e}from"./ssg-client-4kCfdLIF.js";import{S as i}from"./index-DZ-2uk-1.js";import"./react-three-fiber.esm-BGKXzqMs.js";import"./index-YwzUBO0B.js";import"./OrbitControls-HsT3lwqv.js";import"./shapes-TlNlRTiy.js";import"./Line-B0ntdRL2.js";const c=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as turf from '@turf/turf'
import { useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const greatArc = (start, end) => {
  return turf.greatCircle(start, end, {
    properties: { name: 'Seattle to DC' },
    npoints: 100,
  }).geometry.coordinates
}

function latLongToVector3(lon, lat, radius) {
  const phi = (lat * Math.PI) / 180 // 纬度转换为弧度
  const theta = ((lon - 180) * Math.PI) / 180 // 经度转换为弧度，经度范围从 -180 到 180 度

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

function Com({ start, end, lineColor = 'red' }) {
  const poi = useRef()
  const radius = 15 // 球体半径
  const arcPoints = greatArc(start, end)
  const position = latLongToVector3(start[0], start[1], radius)
  const points = arcPoints.map((point, i) => {
    // 归一化
    const t = (i + 1) / arcPoints.length
    return latLongToVector3(point[0], point[1], radius + Math.sin(t * Math.PI))
  })
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5)
  useFrame((state, delta) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    const t = (elapsed / 3) % 1 // 归一化时间

    const point = curve.getPointAt(t)
    poi.current.position.copy(point)
  })
  const gradient = new THREE.Vector3(0, 0, 1).lerp(
    new THREE.Vector3(1, 0, 0),
    0.5
  )
  return (
    <>
      <Sphere position={position} scale={[0.2, 0.2, 0.2]} args={[1]} ref={poi}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <Line points={curve.getPoints(50)} color={lineColor} opacity={0.5} />
    </>
  )
}
const Earth = () => {
  const earth = useLoader(THREE.TextureLoader, staticPath + '/earth2.png')
  return (
    <Sphere args={[15, 1000, 1000]}>
      <meshStandardMaterial map={earth} />
    </Sphere>
  )
}
const Sphereg = () => {
  const lines = [
    [
      [116.2, 39.56],
      [74.006, 1.7128],
    ],
    [
      [116.2, 39.56],
      [116.2, 30],
    ],
    [
      [116.2, 39.56],
      [74.006, 20.7128],
    ],
    [
      [116.2, 39.56],
      [130.006, 46.7128],
    ],
  ]

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
        <Earth />
        {lines.map((line, i) => (
          <Com key={i} start={line[0]} end={line[1]} />
        ))}
      </Canvas>
    </div>
  )
}
export default Sphereg
`,p=void 0,l=void 0,u={code:c,title:p,desc:l},m=!0,d=Object.freeze(Object.defineProperty({__proto__:null,default:i,demoMeta:u,isDemo:m},Symbol.toStringTag,{value:"Module"}));function o(n){const{Demo:t}={...r(),...n.components};return t||h("Demo"),e.jsx(t,{...d})}function f(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}function h(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const g=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=s;a.main=g;export{a as default};
