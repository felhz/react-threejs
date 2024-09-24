import{p as j}from"./three_-FU1-d8Ot.js";import{j as n,r as C,u as f}from"./index-CPgobmJe.js";import{C as S,V as b,a as v,b as y,O as E,u as w,L as T}from"./OrbitControls-C6VbckK3.js";import{S as d}from"./shapes-BOxPPXpl.js";function c(t,e,s){const o=t*Math.PI/180,r=(e-180)*Math.PI/180,i=-s*Math.cos(o)*Math.cos(r),M=s*Math.sin(o),x=s*Math.cos(o)*Math.sin(r);return new b(i,M,x)}const l=40.7128,u=-74.006,a=15,p=c(l,u,a),m=new S([p,c(l-10,u,a+2),c(l-20,u,a)],!1,"catmullrom",.5);function _(){const t=C.useRef();return w((e,s)=>{const o=e.clock.getElapsedTime(),r=Math.min(o/3,1),i=m.getPointAt(r);t.current.position.copy(i)}),console.log(p),n.jsxs(n.Fragment,{children:[n.jsx(d,{args:[a],children:n.jsx("meshStandardMaterial",{color:"hotpink",wireframe:!0})}),n.jsx(d,{position:p,scale:[.2,.2,.2],args:[1],ref:t,children:n.jsx("meshStandardMaterial",{color:"green"})}),n.jsx(T,{points:m.getPoints(50)})]})}const L=()=>n.jsxs(v,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new y(16777215)},camera:{position:[0,0,40],fov:45},children:[n.jsx(E,{}),n.jsx("axesHelper",{args:[10]}),n.jsx("ambientLight",{intensity:Math.PI}),n.jsx(_,{})]}),P=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function latLongToVector3(lat, lon, radius) {
  const phi = (lat * Math.PI) / 180 // 纬度转换为弧度
  const theta = ((lon - 180) * Math.PI) / 180 // 经度转换为弧度，经度范围从 -180 到 180 度

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

// 示例使用
const latitude = 40.7128 // 纬度，例如纽约市
const longitude = -74.006 // 经度，例如纽约市
const radius = 15 // 球体半径

const position = latLongToVector3(latitude, longitude, radius)
const curve = new THREE.CatmullRomCurve3(
  [
    position,
    latLongToVector3(latitude - 10, longitude, radius + 2),
    latLongToVector3(latitude - 20, longitude, radius),
  ],
  false,
  'catmullrom',
  0.5
)
function Com() {
  const poi = useRef()
  useFrame((state, delta) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    // console.log(elapsed, 'elapsed');
    const t = Math.min(elapsed / 3, 1) // 归一化时间

    const point = curve.getPointAt(t)
    poi.current.position.copy(point)
  })
  console.log(position)
  return (
    <>
      <Sphere args={[radius]}>
        <meshStandardMaterial color="hotpink" wireframe />
      </Sphere>
      <Sphere position={position} scale={[0.2, 0.2, 0.2]} args={[1]} ref={poi}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <Line points={curve.getPoints(50)} />
    </>
  )
}

const Sphereg = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      <axesHelper args={[10]} />
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  )
}
export default Sphereg
`,R=void 0,O=void 0,V={code:P,title:R,desc:O},k=!0,I=Object.freeze(Object.defineProperty({__proto__:null,default:L,demoMeta:V,isDemo:k},Symbol.toStringTag,{value:"Module"}));function h(t){const{Demo:e}={...f(),...t.components};return e||H("Demo"),n.jsx(e,{...I})}function D(t={}){const{wrapper:e}={...f(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(h,{...t})}):h(t)}function H(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const z=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),g={};g.outlineInfo=j;g.main=z;export{g as default};
