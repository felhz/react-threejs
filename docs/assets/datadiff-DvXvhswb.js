import{p as $}from"./datadiff_-FU1-d8Ot.js";import{r,j as t,u as B}from"./ssg-client-jqSihuOd.js";import{B as Y,V,S as F,_ as H,a as G,M as k,c as N,D as I,C as Z,b as q,E as J,u as K}from"./react-three-fiber.esm-C8M_wf_e.js";import{s as v}from"./index-CSwHO5PT.js";import{u as b}from"./Texture-CxrksZtJ.js";import{B as Q,P as L}from"./shapes-QwmQt7Ct.js";import{T as z}from"./Text-CkPcN8VH.js";import{O as U}from"./OrbitControls-IfKY8eh_.js";import{S as ee}from"./SpotLight-CDgyIP4D.js";const te=r.forwardRef(function({children:e,disable:o,disableX:s,disableY:c,disableZ:a,left:i,right:f,top:m,bottom:E,front:j,back:R,onCentered:p,precise:S=!0,cacheKey:X=0,...W},A){const h=r.useRef(null),d=r.useRef(null),T=r.useRef(null);return r.useLayoutEffect(()=>{d.current.matrixWorld.identity();const l=new Y().setFromObject(T.current,S),u=new V,M=new F,x=l.max.x-l.min.x,g=l.max.y-l.min.y,w=l.max.z-l.min.z;l.getCenter(u),l.getBoundingSphere(M);const y=m?g/2:E?-g/2:0,P=i?-x/2:f?x/2:0,_=j?w/2:R?-w/2:0;d.current.position.set(o||s?0:-u.x+P,o||c?0:-u.y+y,o||a?0:-u.z+_),typeof p<"u"&&p({parent:h.current.parent,container:h.current,width:x,height:g,depth:w,boundingBox:l,boundingSphere:M,center:u,verticalAlignment:y,horizontalAlignment:P,depthAlignment:_})},[X,p,m,i,j,o,s,c,a,S,f,E,R]),r.useImperativeHandle(A,()=>h.current,[]),r.createElement("group",H({ref:h},W),r.createElement("group",{ref:d},r.createElement("group",{ref:T},e)))});class ne extends k{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const re=r.forwardRef(({speed:n=1,...e},o)=>{const[s]=r.useState(()=>new ne);return G(c=>s&&(s.time=c.clock.getElapsedTime()*n)),r.createElement("primitive",H({object:s,ref:o,attach:"material"},e))}),C=r.forwardRef(({value:n=5,text:e="未设置",axisX:o=0,img:s},c)=>{r.useEffect(()=>{},[]);const a={width:2,z:3,img:{height:2}},i=b(v+"/diff/bar.jpg"),f=b(v+"/diff/us.jpeg"),m=b(`${v}/diff/${s||"kele.jpeg"}`);return i.repeat.set(.2,1),t.jsxs("mesh",{position:[o,0,0],ref:c,children:[t.jsx(te,{top:!0,children:t.jsx(Q,{castShadow:!0,args:[a.width,n,a.z],material:new k({opacity:1,shininess:100,map:i})})}),t.jsx(z,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"#000",position:[0,n-a.img.height-.5,a.z/2+.1],children:e}),t.jsx(L,{args:[a.width,a.img.height],position:[0,n-a.img.height/2,a.z/2+.1],material:new N({map:m,side:I})}),t.jsxs("mesh",{position:[a.width-.59,n-1,a.z/2-.1],children:[t.jsx("planeGeometry",{args:[2,2,10]}),t.jsx(re,{factor:.3,speed:5,map:f})]}),t.jsx(z,{anchorY:"top",fontSize:1,scale:.8,maxWidth:3,color:"#000",position:[0,0,a.z],children:`销量:${n}w`})]})});function ae(){const{camera:n,scene:e}=K(),o=r.useRef(1),s=r.useRef(),c=[{value:5,text:"其他饮品"},{value:7,text:"百事可乐",img:"baishi.webp"},{value:10,text:"可口可乐",img:"kele.jpeg"}];return r.useRef(),r.useEffect(()=>{window.camera=n,setInterval(()=>{o.current>c.length&&(o.current=1,n.position.x=0)},1e3)},[]),t.jsxs(t.Fragment,{children:[t.jsx(ee,{color:65535,distance:30,angle:Math.PI/3,attenuation:31,anglePower:.4,position:[0,31,0]}),t.jsx("spotLight",{castShadow:!0,args:[16777215,10,33,Math.PI/1,.3,.01],position:[15,30,0]}),c.map((a,i)=>i===c.length-2?r.createElement(C,{ref:s,...a,key:i,axisX:i*7}):r.createElement(C,{...a,key:i,axisX:i*7}))]})}const oe=()=>t.jsx("div",{style:{height:"60vh"},children:t.jsxs(Z,{dpr:[1,2],shadows:!0,scene:{background:new q(15390897)},gl:{alpha:!1},camera:{position:[0,0,37],fov:45},children:[t.jsx(U,{}),t.jsx("axesHelper",{args:[10]}),t.jsx(ae,{}),t.jsx(L,{args:[100,100],position:[0,-1,0],receiveShadow:!0,rotation:new J(Math.PI/2,0,0,"XYZ"),children:t.jsx("meshStandardMaterial",{color:16777215,side:I})})]})}),ie=`import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  SpotLight,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { forwardRef, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = forwardRef(
  ({ value = 5, text = '未设置', axisX = 0, img }, ref) => {
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
      <mesh position={[axisX, 0, 0]} ref={ref}>
        <Center top>
          <Box
            castShadow={true}
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
)

function Com() {
  const { camera, scene } = useThree()
  const current = useRef(1)
  const wallRef = useRef()
  const data = [
    { value: 5, text: '其他饮品' },
    { value: 7, text: '百事可乐', img: 'baishi.webp' },
    { value: 10, text: '可口可乐', img: 'kele.jpeg' },
  ]
  const lightRef = useRef()
  useEffect(() => {
    window.camera = camera
    // lightRef.current.target = wallRef.current
    // scene.add(new THREE.DirectionalLightHelper(lightRef.current))
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
      {/* <directionalLight
        ref={lightRef}
        position={[5, 20, 20]}
        args={[0xffffff, 1]}
        castShadow={true}
      /> */}
      <SpotLight
        color={0x00ffff}
        distance={30}
        angle={Math.PI / 3}
        attenuation={31}
        anglePower={0.4}
        position={[0, 31, 0]}
      ></SpotLight>
      <spotLight
        castShadow={true}
        args={[0xffffff, 10, 33, Math.PI / 1, 0.3, 0.01]}
        position={[15, 30, 0]}
      />
      {data.map((item, index) => {
        if (index === data.length - 2) {
          return <Bar ref={wallRef} {...item} key={index} axisX={index * 7} />
        }
        return <Bar {...item} key={index} axisX={index * 7} />
      })}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        shadows={true}
        scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 37], fov: 45 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />

        <Plane
          args={[100, 100]}
          position={[0, -1, 0]}
          receiveShadow={true}
          rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        >
          <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
        </Plane>
      </Canvas>
    </div>
  )
}

export default DataDiff
`,se=void 0,ce=void 0,le={code:ie,title:se,desc:ce},ue=!0,fe=Object.freeze(Object.defineProperty({__proto__:null,default:oe,demoMeta:le,isDemo:ue},Symbol.toStringTag,{value:"Module"}));function D(n){const{Demo:e}={...B(),...n.components};return e||he("Demo"),t.jsx(e,{...fe})}function me(n={}){const{wrapper:e}={...B(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(D,{...n})}):D(n)}function he(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const pe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),O={};O.outlineInfo=$;O.main=pe;export{O as default};
