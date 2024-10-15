import{p as L}from"./datadiff_-FU1-d8Ot.js";import{r as a,j as n,u as P}from"./ssg-client-CyA5FH7a.js";import{B as X,V as I,S as F,_ as R,a as V,M as G,C as N,b as H,c as S,T as Y,D as $}from"./react-three-fiber.esm-C-zgg9K9.js";import{s as d}from"./index-CSwHO5PT.js";import{O as q}from"./OrbitControls-CXr8ktiK.js";import{u as B}from"./Texture-Bd2t9bJn.js";import{B as J,P as K}from"./shapes-Bz6hIEwz.js";import{T as Q}from"./Text-BpvVLx9y.js";const U=a.forwardRef(function({children:e,disable:o,disableX:r,disableY:s,disableZ:l,left:g,right:v,top:b,bottom:j,front:E,back:w,onCentered:u,precise:M=!0,cacheKey:W=0,...k},A){const m=a.useRef(null),f=a.useRef(null),T=a.useRef(null);return a.useLayoutEffect(()=>{f.current.matrixWorld.identity();const i=new X().setFromObject(T.current,M),c=new I,_=new F,h=i.max.x-i.min.x,p=i.max.y-i.min.y,x=i.max.z-i.min.z;i.getCenter(c),i.getBoundingSphere(_);const y=b?p/2:j?-p/2:0,C=g?-h/2:v?h/2:0,z=E?x/2:w?-x/2:0;f.current.position.set(o||r?0:-c.x+C,o||s?0:-c.y+y,o||l?0:-c.z+z),typeof u<"u"&&u({parent:m.current.parent,container:m.current,width:h,height:p,depth:x,boundingBox:i,boundingSphere:_,center:c,verticalAlignment:y,horizontalAlignment:C,depthAlignment:z})},[W,u,b,g,E,o,r,s,l,M,v,j,w]),a.useImperativeHandle(A,()=>m.current,[]),a.createElement("group",R({ref:m},k),a.createElement("group",{ref:f},a.createElement("group",{ref:T},e)))});class Z extends G{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const ee=a.forwardRef(({speed:t=1,...e},o)=>{const[r]=a.useState(()=>new Z);return V(s=>r&&(r.time=s.clock.getElapsedTime()*t)),a.createElement("primitive",R({object:r,ref:o,attach:"material"},e))}),te=({value:t=5,text:e="未设置",axisX:o=0})=>{a.useEffect(()=>{},[]);const r={width:3,z:3,img:{height:2}},s=B(d+"/pano/bar.jpg"),l=B(d+"/diff/us.jpeg");return s.repeat.set(.2,1),n.jsxs("mesh",{position:[o,0,0],children:[n.jsx(U,{top:!0,children:n.jsx(J,{args:[r.width,t,r.z],material:new S({color:new H(16777215),map:s})})}),n.jsx(Q,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"blue",position:[0,t-r.img.height,r.z/2+.1],children:e}),n.jsx(K,{args:[r.width,r.img.height],position:[0,t-r.img.height/2,r.z/2+.1],material:new S({map:new Y().load(d+"/diff/us.jpeg"),side:$})}),n.jsxs("mesh",{position:[r.width-.59,t-1,r.z/2-.3],children:[n.jsx("planeGeometry",{args:[2,2,10]}),n.jsx(ee,{factor:.3,speed:5,map:l})]})]})};function ne(){const t=[{value:5,text:"未设置"},{value:10,text:"已设置"},{value:15,text:"已设置"}];return n.jsx(n.Fragment,{children:t.map((e,o)=>a.createElement(te,{...e,key:o,axisX:o*7}))})}const re=()=>n.jsx("div",{style:{height:"60vh"},children:n.jsxs(N,{dpr:[1,2],scene:{background:new H(16777215)},gl:{alpha:!1},camera:{position:[0,0,20],fov:70},children:[n.jsx(q,{}),n.jsx("axesHelper",{args:[10]}),n.jsx("ambientLight",{intensity:Math.PI}),n.jsx(ne,{})]})}),ae=`import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
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
      <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.3]}>
        <planeGeometry args={[2, 2, 10]} />
        <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
      </mesh>
    </mesh>
  )
}

function Com() {
  const data = [
    { value: 5, text: '未设置' },
    { value: 10, text: '已设置' },
    { value: 15, text: '已设置' },
  ]
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
`,oe=void 0,ie=void 0,se={code:ae,title:oe,desc:ie},ce=!0,le=Object.freeze(Object.defineProperty({__proto__:null,default:re,demoMeta:se,isDemo:ce},Symbol.toStringTag,{value:"Module"}));function D(t){const{Demo:e}={...P(),...t.components};return e||ue("Demo"),n.jsx(e,{...le})}function me(t={}){const{wrapper:e}={...P(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(D,{...t})}):D(t)}function ue(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const fe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),O={};O.outlineInfo=L;O.main=fe;export{O as default};
