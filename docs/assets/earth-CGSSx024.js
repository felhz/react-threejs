import{p as j}from"./earth_-FU1-d8Ot.js";import{j as e,r as P,u as i}from"./ssg-client-C6-up7Ct.js";import{C,a,A as v,V as S,u as T,b as H,c as o,d as b,T as R,S as s}from"./react-three-fiber.esm-B87Saucm.js";import{O as y}from"./OrbitControls-CtZFSSzX.js";import{G as I,a as F}from"./GizmoViewport-CuACyGna.js";import{L}from"./Line-BKnen9CK.js";import"./Hud-D3FE8hZl.js";function _(){const r=new v(0,0,20,0,Math.PI*2,!1),l=r.getPoints(50),[m,p]=P.useState(new S),u=T(R,"/react-threejs/earth.jpg"),h=new s(10,Math.PI/180*0,0),d=new s(12,Math.PI/180*45,0),f=new s(13,Math.PI/180*90,0),E=new s(12,Math.PI/180*135,0),w=new s(10,Math.PI/180*180,0);return new H([new o().setFromSpherical(h),new o().setFromSpherical(d),new o().setFromSpherical(f),new o().setFromSpherical(E),new o().setFromSpherical(w)],!1,"catmullrom",.5).getPoints(100),b(g=>{const x=g.clock.getElapsedTime()/15%1,M=r.getPointAt(x);p(M)}),e.jsxs("group",{children:[e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[10]}),e.jsx("meshStandardMaterial",{map:u})]}),e.jsxs("mesh",{children:[e.jsx(L,{points:l,color:new a(65280)}),e.jsxs("mesh",{position:[...m,0],children:[e.jsx("sphereGeometry",{args:[1]}),e.jsx("meshBasicMaterial",{color:new a(255),opacity:.5,transparent:!0})]})]})]})}const G=()=>e.jsxs(C,{shadows:!0,dpr:[1,2],style:{height:"80vh"},gl:{alpha:!1},scene:{background:new a(16777215)},camera:{position:[0,0,80],fov:45},children:[e.jsx(y,{}),e.jsx(I,{children:e.jsx(F,{axisColors:["red","green","blue"],labelColor:"black"})}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(_,{})]}),V=`import {
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
`,O=void 0,z=void 0,D={code:V,title:O,desc:z},k=!0,A=Object.freeze(Object.defineProperty({__proto__:null,default:G,demoMeta:D,isDemo:k},Symbol.toStringTag,{value:"Module"}));function n(t){const{Demo:r}={...i(),...t.components};return r||B("Demo"),e.jsx(r,{...A})}function X(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}function B(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const q=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=j;c.main=q;export{c as default};
