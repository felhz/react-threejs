import{p as L}from"./datadiff_-FU1-d8Ot.js";import{r as o,j as e,u as B}from"./ssg-client-osvJgeis.js";import{B as X,V as I,S as W,_ as F,C as V,b as R,u as Y,M as P,T as q,D as G}from"./react-three-fiber.esm-btdE3oaG.js";import{s as x}from"./index-CSwHO5PT.js";import{O as J}from"./OrbitControls-DlIYYkXU.js";import{u as S}from"./Texture-DgX3Chlg.js";import{B as K,P as N}from"./shapes-CI6dVy3N.js";import{T as Q}from"./Text-BTzaMRXL.js";const U=o.forwardRef(function({children:r,disable:s,disableX:t,disableY:i,disableZ:d,left:g,right:b,top:j,bottom:E,front:v,back:w,onCentered:m,precise:T=!0,cacheKey:O=0,...k},A){const u=o.useRef(null),l=o.useRef(null),C=o.useRef(null);return o.useLayoutEffect(()=>{l.current.matrixWorld.identity();const a=new X().setFromObject(C.current,T),c=new I,y=new W,f=a.max.x-a.min.x,p=a.max.y-a.min.y,h=a.max.z-a.min.z;a.getCenter(c),a.getBoundingSphere(y);const M=j?p/2:E?-p/2:0,z=g?-f/2:b?f/2:0,D=v?h/2:w?-h/2:0;l.current.position.set(s||t?0:-c.x+z,s||i?0:-c.y+M,s||d?0:-c.z+D),typeof m<"u"&&m({parent:u.current.parent,container:u.current,width:f,height:p,depth:h,boundingBox:a,boundingSphere:y,center:c,verticalAlignment:M,horizontalAlignment:z,depthAlignment:D})},[O,m,j,g,v,s,t,i,d,T,b,E,w]),o.useImperativeHandle(A,()=>u.current,[]),o.createElement("group",F({ref:u},k),o.createElement("group",{ref:l},o.createElement("group",{ref:C},r)))}),$=({value:n=5,text:r="未设置",axisX:s=0})=>{o.useEffect(()=>{},[]);const t={width:3,z:3,img:{height:2}},i=S(x+"/pano/bar.jpg");return i.repeat.set(.2,1),e.jsxs("mesh",{position:[s,0,0],children:[e.jsx(U,{top:!0,children:e.jsx(K,{args:[t.width,n,t.z],material:new P({color:new R(16777215),map:i})})}),e.jsx(Q,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"blue",position:[0,n-t.img.height,t.z/2+.1],children:r}),e.jsx(N,{args:[t.width,t.img.height],position:[0,n-t.img.height/2,t.z/2+.1],material:new P({map:new q().load(x+"/diff/us.jpeg"),side:G})})]})};function Z(){const n=S(x+"/pano/home.jpg"),{scene:r}=Y();o.useEffect(()=>{r.background=n},[]);const s=[{value:5,text:"未设置"},{value:10,text:"已设置"},{value:15,text:"已设置"}];return e.jsx(e.Fragment,{children:s.map((t,i)=>o.createElement($,{...t,key:i,axisX:i*5}))})}const ee=()=>e.jsx("div",{style:{height:"60vh"},children:e.jsxs(V,{dpr:[1,2],scene:{background:new R(16777215)},gl:{alpha:!1},camera:{position:[0,0,20],fov:70},children:[e.jsx(J,{}),e.jsx("axesHelper",{args:[10]}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(Z,{})]})}),ne=`import {
  Box,
  Center,
  OrbitControls,
  Plane,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = ({ value = 5, text = '未设置', axisX = 0 }) => {
  useEffect(() => {}, [])
  const bar = {
    width: 3,
    z: 3,
    img: {
      height: 2,
    },
  }
  const texture = useTexture(staticPath + '/pano/bar.jpg')
  texture.repeat.set(0.2, 1)
  // 反转纹理
  // texture.flipY = false

  return (
    <mesh position={[axisX, 0, 0]}>
      <Center top>
        <Box
          args={[bar.width, value, bar.z]}
          material={
            new THREE.MeshBasicMaterial({
              color: new THREE.Color(0xffffff),
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
        color={'blue'}
        position={[0, value - bar.img.height, bar.z / 2 + 0.1]}
      >
        {text}
      </Text>
      <Plane
        args={[bar.width, bar.img.height]}
        position={[0, value - bar.img.height / 2, bar.z / 2 + 0.1]}
        material={
          new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(staticPath + '/diff/us.jpeg'),
            side: THREE.DoubleSide,
          })
        }
      ></Plane>
    </mesh>
  )
}

function Com() {
  const texture = useTexture(staticPath + '/pano/home.jpg')
  const { scene } = useThree()
  useEffect(() => {
    scene.background = texture
  }, [])

  const data = [
    { value: 5, text: '未设置' },
    { value: 10, text: '已设置' },
    { value: 15, text: '已设置' },
  ]
  return (
    <>
      {data.map((item, index) => (
        <Bar {...item} key={index} axisX={index * 5} />
      ))}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        scene={{ background: new THREE.Color(0xffffff) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 20], fov: 70 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
      </Canvas>
    </div>
  )
}

export default DataDiff
`,te=void 0,re=void 0,oe={code:ne,title:te,desc:re},ae=!0,se=Object.freeze(Object.defineProperty({__proto__:null,default:ee,demoMeta:oe,isDemo:ae},Symbol.toStringTag,{value:"Module"}));function _(n){const{Demo:r}={...B(),...n.components};return r||ce("Demo"),e.jsx(r,{...se})}function ie(n={}){const{wrapper:r}={...B(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(_,{...n})}):_(n)}function ce(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const ue=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),H={};H.outlineInfo=L;H.main=ue;export{H as default};
