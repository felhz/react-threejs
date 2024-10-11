import{p as i}from"./light_-FU1-d8Ot.js";import{j as t,u as r}from"./ssg-client-QCL6abap.js";import{ax as c,ay as h,K as l,az as d,D as f}from"./react-three-fiber.esm-Wlljgie4.js";import{O as p}from"./OrbitControls-Co5GMNoC.js";import{B as m,S as u}from"./shapes-Ba5BUq89.js";console.log(c);let s=new h(65535,1e3,100,Math.PI/18,.5,1);s.position.set(2,15,0);s.castShadow=!0;const g=()=>t.jsxs(t.Fragment,{children:[t.jsx(m,{args:[1,1,1],position:[1,1,0],castShadow:!0,children:t.jsx("meshLambertMaterial",{color:"red"})}),t.jsx("spotLight",{castShadow:!0,args:[16777215,1,100,Math.PI/18,.3,.01],position:[-2,15,0]}),t.jsx("directionalLight",{castShadow:!0,args:[16777215,1],position:[5,12,0]}),t.jsx(u,{args:[1,32,32],position:[5,1,0],castShadow:!0,children:t.jsx("meshLambertMaterial",{color:"red",opacity:.1})}),t.jsxs("mesh",{receiveShadow:!0,rotation:new d(Math.PI/2,0,0,"XYZ"),position:[0,-1,0],children:[t.jsx("planeGeometry",{args:[40,30]}),t.jsx("meshStandardMaterial",{color:16777215,side:f})]})]});function x(){return t.jsx(g,{})}const S=()=>t.jsx("div",{style:{height:"60vh"},children:t.jsxs(l,{dpr:[1,2],gl:{alpha:!1},shadows:!0,camera:{position:[0,7,7],fov:70},children:[t.jsx(p,{}),t.jsx("axesHelper",{args:[10]}),t.jsx(x,{})]})}),j=`import { Box, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
console.log(THREE)
let spotLight = new THREE.SpotLight(0x00ffff, 1000, 100, Math.PI / 18, 0.5, 1)

spotLight.position.set(2, 15, 0)
spotLight.castShadow = true
const TextD = () => {
  return (
    <>
      <Box args={[1, 1, 1]} position={[1, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'red'} />
      </Box>
      <spotLight
        castShadow={true}
        args={[0xffffff, 1, 100, Math.PI / 18, 0.3, 0.01]}
        position={[-2, 15, 0]}
      />
      {/* <SpotLight
        args={[new THREE.Color(0xff0000), 1, 1, Math.PI / 1, 0, 0.1]}
        castShadow={true}
        position={[5, 5, 0]}
      ></SpotLight> */}
      <directionalLight
        castShadow={true}
        args={[0xffffff, 1]}
        position={[5, 12, 0]}
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
`,w=void 0,L=void 0,M={code:j,title:w,desc:L},E=!0,b=Object.freeze(Object.defineProperty({__proto__:null,default:S,demoMeta:M,isDemo:E},Symbol.toStringTag,{value:"Module"}));function n(e){const{Demo:o}={...r(),...e.components};return o||y("Demo"),t.jsx(o,{...b})}function v(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}function y(e,o){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const C=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=i;a.main=C;export{a as default};
