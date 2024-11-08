import{p as s}from"./light_-FU1-d8Ot.js";import{j as e,u as r}from"./ssg-client-CTSCcih9.js";import{aa as i,C as c,E as l,D as d}from"./react-three-fiber.esm-BcJ7ils1.js";import{O as h}from"./OrbitControls-BpasSFef.js";import{B as f,S as m}from"./shapes-DXJPjjdU.js";import{S as p}from"./SpotLight-BXXBrel3.js";console.log(i);const u=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{args:[1,1,1],position:[1,1,0],castShadow:!0,children:e.jsx("meshLambertMaterial",{color:"pink"})}),e.jsx("spotLight",{castShadow:!0,args:[16777215,1,100,Math.PI/18,.3,.01],position:[-2,15,0]}),e.jsx(p,{color:65535,distance:10,angle:Math.PI/2,attenuation:5,anglePower:1,position:[3,3,0]}),e.jsx("directionalLight",{castShadow:!0,args:[16777215,1],position:[-20,12,0]}),e.jsx(m,{args:[1,32,32],position:[5,1,0],castShadow:!0,children:e.jsx("meshLambertMaterial",{color:"red",opacity:.1})}),e.jsxs("mesh",{receiveShadow:!0,rotation:new l(Math.PI/2,0,0,"XYZ"),position:[0,-1,0],children:[e.jsx("planeGeometry",{args:[40,30]}),e.jsx("meshStandardMaterial",{color:16777215,side:d})]})]});function g(){return e.jsx(u,{})}const x=()=>e.jsx("div",{style:{height:"60vh"},children:e.jsxs(c,{dpr:[1,2],gl:{alpha:!1},shadows:!0,camera:{position:[0,7,7],fov:70},children:[e.jsx(h,{}),e.jsx("axesHelper",{args:[10]}),e.jsx(g,{})]})}),S=`import { Box, OrbitControls, Sphere, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
console.log(THREE)
const TextD = () => {
  return (
    <>
      <Box args={[1, 1, 1]} position={[1, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'pink'} />
      </Box>
      <spotLight
        castShadow={true}
        args={[0xffffff, 1, 100, Math.PI / 18, 0.3, 0.01]}
        position={[-2, 15, 0]}
      />
      <SpotLight
        color={0x00ffff}
        distance={10}
        angle={Math.PI / 2}
        attenuation={5}
        anglePower={1}
        position={[3, 3, 0]}
      ></SpotLight>
      <directionalLight
        castShadow={true}
        args={[0xffffff, 1]}
        position={[-20, 12, 0]}
      ></directionalLight>
      <Sphere args={[1, 32, 32]} position={[5, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'red'} opacity={0.1} />
      </Sphere>
      <mesh
        receiveShadow={true}
        rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const Light = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false }}
        shadows={true}
        // scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 7, 7], fov: 70 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />
      </Canvas>
    </div>
  )
}

export default Light
`,j=void 0,M=void 0,w={code:S,title:j,desc:M},b=!0,E=Object.freeze(Object.defineProperty({__proto__:null,default:x,demoMeta:w,isDemo:b},Symbol.toStringTag,{value:"Module"}));function o(t){const{Demo:n}={...r(),...t.components};return n||v("Demo"),e.jsx(n,{...E})}function L(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}function v(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const C=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=s;a.main=C;export{a as default};
