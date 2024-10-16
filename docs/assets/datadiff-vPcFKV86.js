import{p as W}from"./datadiff_-FU1-d8Ot.js";import{r as a,j as n,u as D}from"./ssg-client-Cr4lShia.js";import{B as L,V as X,S as V,_ as P,a as F,M as B,C as $,b as k,u as G,c as N,T as Y,D as q}from"./react-three-fiber.esm-CJ0omfpD.js";import{s as g}from"./index-CSwHO5PT.js";import{O as J}from"./OrbitControls-DZZPqe92.js";import{u as S}from"./Texture-DmJAdKo0.js";import{B as K,P as Q}from"./shapes-BUoM3dr0.js";import{T as U}from"./Text-BPWAE8PN.js";const Z=a.forwardRef(function({children:e,disable:o,disableX:i,disableY:r,disableZ:u,left:m,right:b,top:v,bottom:j,front:w,back:E,onCentered:f,precise:T=!0,cacheKey:O=0,...A},I){const l=a.useRef(null),h=a.useRef(null),M=a.useRef(null);return a.useLayoutEffect(()=>{h.current.matrixWorld.identity();const s=new L().setFromObject(M.current,T),c=new X,y=new V,p=s.max.x-s.min.x,d=s.max.y-s.min.y,x=s.max.z-s.min.z;s.getCenter(c),s.getBoundingSphere(y);const _=v?d/2:j?-d/2:0,C=m?-p/2:b?p/2:0,R=w?x/2:E?-x/2:0;h.current.position.set(o||i?0:-c.x+C,o||r?0:-c.y+_,o||u?0:-c.z+R),typeof f<"u"&&f({parent:l.current.parent,container:l.current,width:p,height:d,depth:x,boundingBox:s,boundingSphere:y,center:c,verticalAlignment:_,horizontalAlignment:C,depthAlignment:R})},[O,f,v,m,w,o,i,r,u,T,b,j,E]),a.useImperativeHandle(I,()=>l.current,[]),a.createElement("group",P({ref:l},A),a.createElement("group",{ref:h},a.createElement("group",{ref:M},e)))});class ee extends B{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const te=a.forwardRef(({speed:t=1,...e},o)=>{const[i]=a.useState(()=>new ee);return F(r=>i&&(i.time=r.clock.getElapsedTime()*t)),a.createElement("primitive",P({object:i,ref:o,attach:"material"},e))}),ne=({value:t=5,text:e="未设置",axisX:o=0,img:i})=>{a.useEffect(()=>{},[]);const r={width:2,z:3,img:{height:2}},u=S(g+"/pano/bar.jpg"),m=S(g+"/diff/us.jpeg");return u.repeat.set(.2,1),n.jsxs("mesh",{position:[o,0,0],children:[n.jsx(Z,{top:!0,children:n.jsx(K,{args:[r.width,t,r.z],material:new B({color:new k(65280),opacity:.5})})}),n.jsx(U,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"blue",position:[0,t-r.img.height,r.z/2+.1],children:e}),n.jsx(Q,{args:[r.width,r.img.height],position:[0,t-r.img.height/2,r.z/2+.1],material:new N({map:new Y().load(g+`/diff/${i||"kele.jpeg"}`),side:q})}),n.jsxs("mesh",{position:[r.width-.59,t-1,r.z/2-.3],children:[n.jsx("planeGeometry",{args:[2,2,10]}),n.jsx(te,{factor:.3,speed:5,map:m})]})]})};function re(){const{camera:t}=G(),e=a.useRef(1),o=[{value:5,text:"其他饮品"},{value:7,text:"百事可乐",img:"baishi.webp"},{value:10,text:"可口可乐",img:"kele.jpeg"}];return a.useEffect(()=>{window.camera=t,setInterval(()=>{e.current>o.length&&(e.current=1,t.position.x=0)},1e3)},[]),n.jsx(n.Fragment,{children:o.map((i,r)=>a.createElement(ne,{...i,key:r,axisX:r*7}))})}const ae=()=>n.jsx("div",{style:{height:"60vh"},children:n.jsxs($,{dpr:[1,2],scene:{background:new k(16777215)},gl:{alpha:!1},camera:{position:[0,0,37],fov:45},children:[n.jsx(J,{}),n.jsx("axesHelper",{args:[10]}),n.jsx("ambientLight",{intensity:Math.PI}),n.jsx(re,{})]})}),oe=`import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = ({ value = 5, text = '未设置', axisX = 0, img }) => {
  useEffect(() => {}, [])
  const bar = {
    width: 2,
    z: 3,
    img: {
      height: 2,
    },
  }
  const texture = useTexture(staticPath + '/pano/bar.jpg')
  const flagTexture = useTexture(staticPath + '/diff/us.jpeg')

  texture.repeat.set(0.2, 1)
  // 反转纹理
  // texture.flipY = false

  return (
    <mesh position={[axisX, 0, 0]}>
      <Center top>
        <Box
          args={[bar.width, value, bar.z]}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color(0x00ff00),
              opacity: 0.5,
              // map: texture,
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
            map: new THREE.TextureLoader().load(
              staticPath + \`/diff/\${img || 'kele.jpeg'}\`
            ),
            side: THREE.DoubleSide,
          })
        }
      ></Plane>
      <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.3]}>
        <planeGeometry args={[2, 2, 10]} />
        <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
      </mesh>
    </mesh>
  )
}

function Com() {
  const { camera } = useThree()
  const current = useRef(1)
  const data = [
    { value: 5, text: '其他饮品' },
    { value: 7, text: '百事可乐', img: 'baishi.webp' },
    { value: 10, text: '可口可乐', img: 'kele.jpeg' },
  ]
  useEffect(() => {
    window.camera = camera

    setInterval(() => {
      // current.current += 1
      // camera.position.x = 7 * current.current
      // camera.lookAt(
      //   new THREE.Vector3(
      //     7 * current.current,
      //     // data[current.current - 1].value,
      //     0,
      //     0
      //   )
      // )

      if (current.current > data.length) {
        current.current = 1
        camera.position.x = 0
      }
    }, 1000)
  }, [])
  return (
    <>
      {data.map((item, index) => (
        <Bar {...item} key={index} axisX={index * 7} />
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
        camera={{ position: [0, 0, 37], fov: 45 }}
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
`,ie=void 0,se=void 0,ce={code:oe,title:ie,desc:se},ue=!0,me=Object.freeze(Object.defineProperty({__proto__:null,default:ae,demoMeta:ce,isDemo:ue},Symbol.toStringTag,{value:"Module"}));function z(t){const{Demo:e}={...D(),...t.components};return e||fe("Demo"),n.jsx(e,{...me})}function le(t={}){const{wrapper:e}={...D(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(z,{...t})}):z(t)}function fe(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const he=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),H={};H.outlineInfo=W;H.main=he;export{H as default};
