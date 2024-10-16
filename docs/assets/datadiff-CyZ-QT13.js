import{p as I}from"./datadiff_-FU1-d8Ot.js";import{r as a,j as n,u as P}from"./ssg-client-BBCeavtq.js";import{B as $,V as L,S as X,_ as B,a as V,M as k,C as Y,b as F,u as G,c as N,D as q}from"./react-three-fiber.esm-DaADibvr.js";import{s as b}from"./index-CSwHO5PT.js";import{O as J}from"./OrbitControls-Du8PPr37.js";import{u as v}from"./Texture-CC7WmQU-.js";import{B as K,P as Q}from"./shapes-DgtvEisK.js";import{T as R}from"./Text-P4MuYgTv.js";const U=a.forwardRef(function({children:e,disable:o,disableX:i,disableY:r,disableZ:c,left:u,right:l,top:j,bottom:w,front:E,back:T,onCentered:h,precise:M=!0,cacheKey:O=0,...W},A){const f=a.useRef(null),p=a.useRef(null),y=a.useRef(null);return a.useLayoutEffect(()=>{p.current.matrixWorld.identity();const s=new $().setFromObject(y.current,M),m=new L,_=new X,x=s.max.x-s.min.x,d=s.max.y-s.min.y,g=s.max.z-s.min.z;s.getCenter(m),s.getBoundingSphere(_);const z=j?d/2:w?-d/2:0,C=u?-x/2:l?x/2:0,S=E?g/2:T?-g/2:0;p.current.position.set(o||i?0:-m.x+C,o||r?0:-m.y+z,o||c?0:-m.z+S),typeof h<"u"&&h({parent:f.current.parent,container:f.current,width:x,height:d,depth:g,boundingBox:s,boundingSphere:_,center:m,verticalAlignment:z,horizontalAlignment:C,depthAlignment:S})},[O,h,j,u,E,o,i,r,c,M,l,w,T]),a.useImperativeHandle(A,()=>f.current,[]),a.createElement("group",B({ref:f},W),a.createElement("group",{ref:p},a.createElement("group",{ref:y},e)))});class Z extends k{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const ee=a.forwardRef(({speed:t=1,...e},o)=>{const[i]=a.useState(()=>new Z);return V(r=>i&&(i.time=r.clock.getElapsedTime()*t)),a.createElement("primitive",B({object:i,ref:o,attach:"material"},e))}),te=({value:t=5,text:e="未设置",axisX:o=0,img:i})=>{a.useEffect(()=>{},[]);const r={width:2,z:3,img:{height:2}},c=v(b+"/diff/bar.jpg"),u=v(b+"/diff/us.jpeg"),l=v(`${b}/diff/${i||"kele.jpeg"}`);return c.repeat.set(.2,1),n.jsxs("mesh",{position:[o,0,0],children:[n.jsx(U,{top:!0,children:n.jsx(K,{args:[r.width,t,r.z],material:new k({opacity:1,shininess:100,map:c})})}),n.jsx(R,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"#000",position:[0,t-r.img.height-.5,r.z/2+.1],children:e}),n.jsx(Q,{args:[r.width,r.img.height],position:[0,t-r.img.height/2,r.z/2+.1],material:new N({map:l,side:q})}),n.jsxs("mesh",{position:[r.width-.59,t-1,r.z/2-.1],children:[n.jsx("planeGeometry",{args:[2,2,10]}),n.jsx(ee,{factor:.3,speed:5,map:u})]}),n.jsx(R,{anchorY:"top",fontSize:1,scale:.8,maxWidth:3,color:"#000",position:[0,0,r.z],children:`销量:${t}w`})]})};function ne(){const{camera:t}=G(),e=a.useRef(1),o=[{value:5,text:"其他饮品"},{value:7,text:"百事可乐",img:"baishi.webp"},{value:10,text:"可口可乐",img:"kele.jpeg"}];return a.useEffect(()=>{window.camera=t,setInterval(()=>{e.current>o.length&&(e.current=1,t.position.x=0)},1e3)},[]),n.jsx(n.Fragment,{children:o.map((i,r)=>a.createElement(te,{...i,key:r,axisX:r*7}))})}const re=()=>n.jsx("div",{style:{height:"60vh"},children:n.jsxs(Y,{dpr:[1,2],scene:{background:new F(15390897)},gl:{alpha:!1},camera:{position:[0,0,37],fov:45},children:[n.jsx(J,{}),n.jsx("axesHelper",{args:[10]}),n.jsx("ambientLight",{intensity:Math.PI}),n.jsx(ne,{}),n.jsx("directionalLight",{position:[0,20,20]})]})}),ae=`import {
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
  const texture = useTexture(staticPath + '/diff/bar.jpg')
  const flagTexture = useTexture(staticPath + '/diff/us.jpeg')
  const itemTexture = useTexture(\`\${staticPath}/diff/\${img || 'kele.jpeg'}\`)

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
              // color: new THREE.Color(0xff0000),
              opacity: 1,
              shininess: 100,
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
        color={'#000'}
        position={[0, value - bar.img.height - 0.5, bar.z / 2 + 0.1]}
      >
        {text}
      </Text>
      <Plane
        args={[bar.width, bar.img.height]}
        position={[0, value - bar.img.height / 2, bar.z / 2 + 0.1]}
        material={
          new THREE.MeshBasicMaterial({
            map: itemTexture,
            side: THREE.DoubleSide,
          })
        }
      ></Plane>
      <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.1]}>
        <planeGeometry args={[2, 2, 10]} />
        <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
      </mesh>
      <Text
        anchorY={'top'}
        fontSize={1}
        scale={0.8}
        maxWidth={3}
        color={'#000'}
        position={[0, 0, bar.z]}
      >
        {\`销量:\${value}w\`}
      </Text>
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
        scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 37], fov: 45 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Com />
        <directionalLight position={[0, 20, 20]} />
      </Canvas>
    </div>
  )
}

export default DataDiff
`,oe=void 0,ie=void 0,se={code:ae,title:oe,desc:ie},ce=!0,me=Object.freeze(Object.defineProperty({__proto__:null,default:re,demoMeta:se,isDemo:ce},Symbol.toStringTag,{value:"Module"}));function D(t){const{Demo:e}={...P(),...t.components};return e||le("Demo"),n.jsx(e,{...me})}function ue(t={}){const{wrapper:e}={...P(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(D,{...t})}):D(t)}function le(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const fe=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),H={};H.outlineInfo=I;H.main=fe;export{H as default};
