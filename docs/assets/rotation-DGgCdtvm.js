import{p as a}from"./rotation_-FU1-d8Ot.js";import{j as e,r as i,u as r}from"./ssg-client-GvFJdTbJ.js";import{C as c,b as m,u as l,a as u}from"./react-three-fiber.esm-W9vqQav0.js";import{O as f}from"./OrbitControls-BCBMCElI.js";function d(){l();const n=i.useRef();return u(()=>{}),e.jsx(e.Fragment,{children:e.jsxs("mesh",{ref:n,children:[e.jsx("meshBasicMaterial",{color:"red",opacity:.1}),e.jsx("boxGeometry",{args:[1,1,5],translateX:1})]})})}const p=()=>e.jsx("div",{style:{height:"60vh"},children:e.jsxs(c,{dpr:[1,2],scene:{background:new m(15390897)},gl:{alpha:!1},camera:{position:[0,0,37],fov:45},children:[e.jsx(f,{}),e.jsx("axesHelper",{args:[10]}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(d,{}),e.jsx("directionalLight",{position:[0,20,20]})]})}),h=`import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

function Com() {
  const { camera } = useThree()
  const boxRef = useRef()
  useFrame(() => {
    // boxRef.current.rotation.z += 0.01
  })
  return (
    <>
      <mesh ref={boxRef}>
        <meshBasicMaterial color="red" opacity={0.1} />
        <boxGeometry args={[1, 1, 5]} translateX={1} />
      </mesh>
    </>
  )
}
const Rotation = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 37], fov: 45 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
        <directionalLight position={[0, 20, 20]} />
      </Canvas>
    </div>
  )
}

export default Rotation
`,x=void 0,b=void 0,g={code:h,title:x,desc:b},j=!0,C=Object.freeze(Object.defineProperty({__proto__:null,default:p,demoMeta:g,isDemo:j},Symbol.toStringTag,{value:"Module"}));function o(n){const{Demo:t}={...r(),...n.components};return t||R("Demo"),e.jsx(t,{...C})}function y(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}function R(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=a;s.main=v;export{s as default};
