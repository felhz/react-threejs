import{p as i}from"./rotation_-FU1-d8Ot.js";import{j as e,r as o,u as a}from"./index-B8vB_q8q.js";import{C as c,b as l,D as m,u as d}from"./react-three-fiber.esm-D8fUusX-.js";import{O as u}from"./OrbitControls-BOWOPo4n.js";import{P as f}from"./shapes--9I5yhDp.js";function h(){d();const t=o.useRef(),n=o.useRef();return o.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsxs("mesh",{ref:t,castShadow:!0,children:[e.jsx("meshBasicMaterial",{color:"red",opacity:.1}),e.jsx("boxGeometry",{args:[1,1,1],translateX:1})]}),e.jsxs("mesh",{ref:n,castShadow:!0,position:[2,0,0],children:[e.jsx("meshBasicMaterial",{color:"red",opacity:.1}),e.jsx("boxGeometry",{args:[1,1,1],translateX:1})]}),e.jsxs("mesh",{castShadow:!0,position:[10,0,0],children:[e.jsx("meshBasicMaterial",{color:"red",opacity:.1}),e.jsx("boxGeometry",{args:[1,1,1],translateX:1})]})]})}const x=()=>e.jsx("div",{style:{height:"60vh"},children:e.jsxs(c,{dpr:[1,2],shadows:!0,scene:{background:new l(15390897)},gl:{alpha:!1},camera:{position:[10,20,37],fov:45},children:[e.jsx(u,{}),e.jsx("axesHelper",{args:[10]}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(h,{}),e.jsx("directionalLight",{args:[16777215,10],position:[0,20,20],castShadow:!0}),e.jsx(f,{args:[100,100],position:[0,-.5,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:e.jsx("meshStandardMaterial",{side:m})})]})}),p=`import { OrbitControls, Plane } from '@react-three/drei'
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
`,b=void 0,g=void 0,j={code:p,title:b,desc:g},R=!0,M=Object.freeze(Object.defineProperty({__proto__:null,default:x,demoMeta:j,isDemo:R},Symbol.toStringTag,{value:"Module"}));function r(t){const{Demo:n}={...a(),...t.components};return n||w("Demo"),e.jsx(n,{...M})}function y(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function w(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const S=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=i;s.main=S;export{s as default};
